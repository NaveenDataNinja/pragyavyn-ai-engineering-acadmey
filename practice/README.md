# Local retrieval project

This project searches three fictional passages using word-count cosine similarity. It is an offline retrieval baseline, **not** a trained embedding model, vector database, chatbot, or complete RAG system. It never calls an external service or downloads a model.

## Run

Install Python 3, then open a terminal in the academy folder:

```powershell
python practice\retrieval_lab.py "How do I reset my password?"
python practice\retrieval_lab.py "Where is the cafeteria?"
python -m unittest discover -s practice -p "test_*.py"
```

Some systems use `python3` instead of `python`. The first query should return the Account guide. The second has no matching evidence and must not invent an answer.

## Engineer's assignment

1. Add a fictional, non-sensitive passage with a unique source ID to `DOCUMENTS`.
2. Add one supported question and one unsupported question to `test_retrieval_lab.py`, and run the tests.
3. Record a case where shared words retrieve an irrelevant passage. Explain why a matching score does not prove a claim.
4. Sketch where permissions, real embeddings, a vector index, source citations, generation, evaluation and monitoring would fit. Do not claim those components are implemented here.

Use only data you have permission to process. Real models and vector databases have their own licensing, dependency and infrastructure requirements.
