const passages = [
  { source: "Account guide", text: "To reset your password, open account settings and choose reset password." },
  { source: "Returns guide", text: "Refund requests for eligible orders are reviewed by the support team." },
  { source: "Delivery guide", text: "Shipping status is available in the order tracking page." }
];
const stopWords = new Set(["a", "an", "and", "are", "do", "for", "how", "i", "in", "is", "my", "of", "on", "or", "the", "to", "what", "when", "where", "your"]);
const form = document.getElementById("retrieval-form");
const input = document.getElementById("retrieval-query");
const results = document.getElementById("lab-results");

function wordCounts(text) {
  const counts = new Map();
  for (const word of text.toLowerCase().match(/[a-z0-9]+/g) || []) {
    if (!stopWords.has(word)) counts.set(word, (counts.get(word) || 0) + 1);
  }
  return counts;
}

function cosineSimilarity(left, right) {
  let dot = 0;
  let leftSquares = 0;
  let rightSquares = 0;
  left.forEach((value, word) => {
    leftSquares += value * value;
    dot += value * (right.get(word) || 0);
  });
  right.forEach(value => { rightSquares += value * value; });
  return leftSquares && rightSquares ? dot / Math.sqrt(leftSquares * rightSquares) : 0;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    results.textContent = "Enter a question before searching.";
    return;
  }
  const queryWords = wordCounts(query);
  const matches = passages.map(passage => ({
    ...passage,
    score: cosineSimilarity(queryWords, wordCounts(passage.text))
  })).filter(passage => passage.score > 0).sort((a, b) => b.score - a.score);
  results.replaceChildren();
  const heading = document.createElement("h3");
  heading.textContent = matches.length ? "Candidate passages — inspect before answering" : "No matching evidence";
  results.append(heading);
  if (!matches.length) {
    const message = document.createElement("p");
    message.textContent = "The available passages do not match these words. Do not invent an answer; ask for another source or question.";
    results.append(message);
    return;
  }
  matches.forEach(match => {
    const card = document.createElement("article");
    card.className = "lab-result";
    const title = document.createElement("strong");
    title.textContent = `${match.source} · similarity ${match.score.toFixed(2)}`;
    const text = document.createElement("p");
    text.textContent = match.text;
    card.append(title, text);
    results.append(card);
  });
});
