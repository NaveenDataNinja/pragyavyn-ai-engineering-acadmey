"""A small offline document-retrieval baseline with fictional source material."""

import argparse
import math
import re
from collections import Counter

DOCUMENTS = (
    ("account", "Account guide", "To reset your password, open account settings and choose reset password."),
    ("returns", "Returns guide", "Refund requests for eligible orders are reviewed by the support team."),
    ("delivery", "Delivery guide", "Shipping status is available in the order tracking page."),
)
STOP_WORDS = {
    "a", "an", "and", "are", "do", "for", "how", "i", "in", "is", "my",
    "of", "on", "or", "the", "to", "what", "when", "where", "your",
}


def word_counts(text):
    return Counter(word for word in re.findall(r"[a-z0-9]+", text.lower()) if word not in STOP_WORDS)


def cosine_similarity(left, right):
    dot = sum(value * right.get(word, 0) for word, value in left.items())
    left_norm = math.sqrt(sum(value * value for value in left.values()))
    right_norm = math.sqrt(sum(value * value for value in right.values()))
    if not left_norm or not right_norm:
        return 0.0
    return dot / (left_norm * right_norm)


def retrieve(query, documents=DOCUMENTS, limit=3):
    if not query.strip():
        raise ValueError("Enter a non-empty question.")
    if limit < 1:
        raise ValueError("The result limit must be at least 1.")
    query_vector = word_counts(query)
    matches = []
    for source_id, title, text in documents:
        score = cosine_similarity(query_vector, word_counts(text))
        if score > 0:
            matches.append((score, source_id, title, text))
    return sorted(matches, key=lambda match: (-match[0], match[1]))[:limit]


def main():
    parser = argparse.ArgumentParser(description="Search fictional documents with word-count cosine similarity.")
    parser.add_argument("query", help="Question or search terms")
    parser.add_argument("--limit", type=int, default=3, help="Maximum number of results (default: 3)")
    args = parser.parse_args()
    try:
        matches = retrieve(args.query, limit=args.limit)
    except ValueError as error:
        parser.error(str(error))
    if not matches:
        print("No matching evidence. Do not invent an answer.")
        return
    for score, source_id, title, text in matches:
        print(f"{title} [{source_id}] - similarity {score:.2f}")
        print(text)


if __name__ == "__main__":
    main()
