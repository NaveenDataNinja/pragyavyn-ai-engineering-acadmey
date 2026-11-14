import unittest
from collections import Counter

from retrieval_lab import cosine_similarity, retrieve


class RetrievalLabTests(unittest.TestCase):
    def test_password_query_finds_account_source(self):
        matches = retrieve("How do I reset my password?")
        self.assertEqual(matches[0][1], "account")
        self.assertGreater(matches[0][0], 0)

    def test_no_matching_evidence_returns_no_results(self):
        self.assertEqual(retrieve("Where is the cafeteria?"), [])

    def test_empty_query_and_invalid_limit_are_rejected(self):
        for query, limit in [("  ", 3), ("password", 0)]:
            with self.subTest(query=query, limit=limit):
                with self.assertRaises(ValueError):
                    retrieve(query, limit=limit)

    def test_cosine_handles_empty_and_identical_vectors(self):
        self.assertEqual(cosine_similarity(Counter(), Counter({"a": 1})), 0)
        self.assertAlmostEqual(cosine_similarity(Counter({"a": 1}), Counter({"a": 1})), 1)

    def test_limit_and_deterministic_ties(self):
        documents = (("b", "B", "password"), ("a", "A", "password"))
        self.assertEqual(retrieve("password", documents=documents, limit=1)[0][1], "a")


if __name__ == "__main__":
    unittest.main()
