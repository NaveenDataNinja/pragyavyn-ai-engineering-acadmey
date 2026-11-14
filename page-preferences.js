try {
  const key = "fieldnotes-ai-academy-v1";
  const rawSaved = localStorage.getItem(key);
  const saved = JSON.parse(rawSaved === null ? "{}" : rawSaved);
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) throw new Error("Invalid saved preferences.");
  const preferences = saved.preferences && typeof saved.preferences === "object" ? saved.preferences : {};
  for (const [name, allowed] of Object.entries({
    theme: ["light", "dark"],
    accent: ["sage", "ocean", "plum"],
    readingSize: ["normal", "large"]
  })) {
    const stored = localStorage.getItem(`${key}:preferences:${name}`);
    const value = stored === null ? preferences[name] : JSON.parse(stored);
    if (allowed.includes(value)) document.documentElement.dataset[name] = value;
  }
} catch (error) {
  console.error("Could not read saved appearance preferences.", error);
  const warning = document.createElement("div");
  warning.className = "lab-notice";
  warning.setAttribute("role", "alert");
  warning.textContent = "Saved preferences could not be read. Return to the roadmap to review your saved progress.";
  document.querySelector("main").prepend(warning);
}
