import contextlib
import io
import json
import threading
import unittest
from http.server import BaseHTTPRequestHandler, HTTPServer
from http.client import RemoteDisconnected
from unittest.mock import patch

import mentor_assistant as project


class FakeOllama(BaseHTTPRequestHandler):
    requests = []

    def do_POST(self):
        body = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
        self.requests.append((self.path, body))
        if self.path == "/api/embed":
            response = {"embeddings": [[1, 0], [1, 0], [0, 1], [-1, 0], [0, -1]]}
        elif self.path == "/api/generate":
            response = {"response": "Submit a service desk request and obtain team lead approval [access]."}
        else:
            self.send_error(404)
            return
        encoded = json.dumps(response).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def log_message(self, format, *args):
        pass


class MentorAssistantTests(unittest.TestCase):
    def test_end_to_end_request_and_display_with_local_api(self):
        FakeOllama.requests = []
        server = HTTPServer(("127.0.0.1", 0), FakeOllama)
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        try:
            output = io.StringIO()
            with patch.object(project, "OLLAMA_URL", f"http://127.0.0.1:{server.server_port}"), contextlib.redirect_stdout(output):
                result = project.main(["How do I request access?"])
            self.assertEqual(result, 0)
            self.assertIn("[access] Workspace access", output.getvalue())
            self.assertIn("verify against the sources", output.getvalue())
            embed_path, embed_body = FakeOllama.requests[0]
            generate_path, generate_body = FakeOllama.requests[1]
            self.assertEqual((embed_path, generate_path), ("/api/embed", "/api/generate"))
            self.assertEqual(embed_body["input"][0], "search_query: How do I request access?")
            self.assertTrue(embed_body["input"][1].startswith("search_document: "))
            self.assertIn("[access] Workspace access", generate_body["prompt"])
            self.assertFalse(generate_body["stream"])
        finally:
            server.shutdown()
            thread.join()
            server.server_close()

    def test_invalid_query_does_not_call_model(self):
        calls = []
        for question in ("  ", "x" * 501):
            with self.subTest(question=question), self.assertRaises(project.ProjectError):
                project.answer(question, post=lambda path, body: calls.append(path))
        self.assertEqual(calls, [])

    def test_invalid_embeddings_stop_before_generation(self):
        calls = []

        def malformed(path, payload):
            calls.append(path)
            return {"embeddings": [[1], [1, 2], [1], [1], [1]]}

        with self.assertRaisesRegex(project.ProjectError, "dimensions"):
            project.answer("Can I request access?", post=malformed)
        self.assertEqual(calls, ["/api/embed"])

    def test_empty_model_answer_is_an_error(self):
        def empty_answer(path, payload):
            if path == "/api/embed":
                return {"embeddings": [[1, 0]] * 5}
            return {"response": ""}

        with self.assertRaisesRegex(project.ProjectError, "empty or invalid answer"):
            project.answer("Can I request access?", post=empty_answer)

    def test_http_failure_reports_model_setup(self):
        server = HTTPServer(("127.0.0.1", 0), FakeOllama)
        thread = threading.Thread(target=server.serve_forever)
        thread.start()
        try:
            with patch.object(project, "OLLAMA_URL", f"http://127.0.0.1:{server.server_port}"):
                with self.assertRaisesRegex(project.ProjectError, "HTTP 404"):
                    project.ollama_post("/missing", {})
        finally:
            server.shutdown()
            thread.join()
            server.server_close()

    def test_disconnect_reports_an_actionable_error(self):
        for error in (ConnectionResetError("connection reset"), RemoteDisconnected("connection closed")):
            with self.subTest(error=type(error).__name__), patch.object(project, "build_opener") as opener:
                opener.return_value.open.side_effect = error
                with self.assertRaisesRegex(project.ProjectError, "Cannot communicate with local Ollama"):
                    project.ollama_post("/api/embed", {})


if __name__ == "__main__":
    unittest.main()
