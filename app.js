const tracks = [
  {
    title: "Getting started",
    subtitle: "Set up your tools and learn how to learn by building.",
    hours: 4,
    modules: [
      { title: "Your AI engineer map", hours: 1, description: "See how code, data, machine learning and AI fit together. Learn the difference between AI, ML and deep learning.", outcome: "Sketch your own learning map." },
      { title: "Set up your workspace", hours: 2, description: "Install Python, VS Code and Git. Run a Python file and learn the terminal basics you'll use throughout the course.", outcome: "Run your first script and save it with Git." },
      { title: "How to practice coding", hours: 1, description: "Break a problem into steps, read error messages and build a simple habit of writing and reviewing code.", outcome: "Make a weekly study plan that fits college." }
    ]
  },
  {
    title: "Python foundations",
    subtitle: "Go from first print statement to clean, reusable programs.",
    hours: 25,
    modules: [
      { title: "Values, variables & input", hours: 3, description: "Work with numbers, text, booleans, conversions and input/output. Understand what a variable represents.", outcome: "Build a unit converter." },
      { title: "Conditions & loops", hours: 4, description: "Make decisions with if/elif/else, repeat actions with for and while, and use range and loop control.", outcome: "Create a number-guessing game." },
      { title: "Functions & problem solving", hours: 5, description: "Write functions with parameters and return values. Decompose a task into smaller steps and test each one.", outcome: "Build a menu-driven calculator." },
      { title: "Lists, dictionaries & strings", hours: 5, description: "Store, search and transform collections. Practice indexing, slicing, comprehensions and choosing the right data structure.", outcome: "Make a small student gradebook." },
      { title: "Files, errors & modules", hours: 4, description: "Read and write text and CSV files, handle expected errors and organize code into modules.", outcome: "Save and reload a personal expense log." },
      { title: "Object-oriented Python & testing", hours: 4, description: "Meet classes and objects, use a few standard-library tools and write simple tests with assert or unittest.", outcome: "Model and test a library book tracker." }
    ]
  },
  {
    title: "SQL & databases",
    subtitle: "Ask reliable questions of the structured data behind applications.",
    hours: 17,
    modules: [
      { title: "Tables, rows & SELECT", hours: 4, description: "Understand tables, columns, keys and relational thinking. Query, sort and limit records with SELECT.", outcome: "Explore a sample college database." },
      { title: "Filtering, joins & NULL", hours: 5, description: "Filter with WHERE, combine tables with INNER and LEFT JOIN, and handle missing values carefully.", outcome: "Connect student, course and enrollment data." },
      { title: "Aggregates & subqueries", hours: 4, description: "Summarize data with COUNT, SUM and GROUP BY. Use HAVING, CASE and readable subqueries.", outcome: "Report course enrollment and pass rates." },
      { title: "Design, updates & safe queries", hours: 4, description: "Learn primary and foreign keys, basic normalization, INSERT/UPDATE, transactions and parameterized queries.", outcome: "Design a small project database schema." }
    ]
  },
  {
    title: "Math for machine learning",
    subtitle: "Build intuition for the math you'll meet in models—not a math detour.",
    hours: 24,
    modules: [
      { title: "Vectors & coordinates", hours: 5, description: "Represent examples as feature vectors. Practice vector addition, magnitude, dot products and simple distances.", outcome: "Calculate similarity between two feature vectors." },
      { title: "Matrices & linear transformations", hours: 6, description: "Read matrices as tables of numbers and transformations. Practice shapes, multiplication and the meaning of matrix operations.", outcome: "Use a matrix to transform 2D points." },
      { title: "Probability & descriptive statistics", hours: 7, description: "Review distributions, mean, median, variance, conditional probability, sampling and correlation.", outcome: "Summarize a dataset and explain its uncertainty." },
      { title: "Derivatives & optimization intuition", hours: 6, description: "Understand slopes, partial derivatives and gradient descent as a way to reduce model error.", outcome: "Trace a few hand-worked gradient updates." }
    ]
  },
  {
    title: "Working with data",
    subtitle: "Turn raw tables into clear questions, useful charts and trustworthy datasets.",
    hours: 20,
    modules: [
      { title: "NumPy arrays", hours: 5, description: "Create arrays, inspect shapes and types, select values, use vectorized operations and generate random samples.", outcome: "Simulate and summarize experiment measurements." },
      { title: "Pandas & data cleaning", hours: 6, description: "Load CSV files, inspect DataFrames, handle missing values, filter, group, join and create useful columns.", outcome: "Clean a messy student performance dataset." },
      { title: "Visualize to understand", hours: 4, description: "Choose readable charts for comparisons and distributions. Label axes and spot misleading visual choices.", outcome: "Create a short, clearly labeled data story." },
      { title: "Exploratory data analysis", hours: 5, description: "Ask a question, inspect data quality, explore patterns and communicate findings without claiming causation.", outcome: "Publish a notebook with findings and caveats." }
    ]
  },
  {
    title: "Machine learning",
    subtitle: "Train, test and evaluate classical models before reaching for deep learning.",
    hours: 28,
    modules: [
      { title: "The machine learning workflow", hours: 4, description: "Frame prediction tasks, separate features from labels and split data before fitting a model.", outcome: "Write down a sensible baseline for a dataset." },
      { title: "Regression", hours: 6, description: "Fit linear regression, understand predictions and residuals, and practice feature scaling and leakage prevention.", outcome: "Estimate a numeric outcome and inspect its errors." },
      { title: "Classification", hours: 6, description: "Train logistic regression and k-nearest neighbors. Interpret class probabilities and choose a threshold for a use case.", outcome: "Classify an example dataset with a clear baseline." },
      { title: "Trees & ensemble models", hours: 6, description: "Use decision trees and random forests. Understand overfitting, feature importance and why a model may generalize.", outcome: "Compare a tree with a simple baseline." },
      { title: "Evaluation & scikit-learn pipelines", hours: 6, description: "Choose metrics, use cross-validation, build preprocessing pipelines and document limitations.", outcome: "Create a reproducible model comparison." }
    ]
  },
  {
    title: "Deep learning with PyTorch",
    subtitle: "Understand neural networks and build your first trainable models.",
    hours: 25,
    modules: [
      { title: "Neural network building blocks", hours: 5, description: "Connect layers, weights, activations, loss and gradient descent to the math intuition from earlier.", outcome: "Draw a small network and explain its training loop." },
      { title: "Tensors & PyTorch training", hours: 7, description: "Create tensors, use autograd, define a model, calculate loss and train with a basic loop.", outcome: "Train a small model on tabular data." },
      { title: "Image classification with CNNs", hours: 6, description: "Learn convolutions, pooling and image batches. Use a simple convolutional network and inspect errors.", outcome: "Classify a small public image dataset." },
      { title: "Sequences & attention concepts", hours: 7, description: "Meet tokens, embeddings, sequence models and the intuition behind attention and transformers.", outcome: "Visualize tokenization and attention at a small scale." }
    ]
  },
  {
    title: "Generative AI & language models",
    subtitle: "Use language models thoughtfully, with retrieval, evaluation and safety in mind.",
    hours: 23,
    modules: [
      { title: "Text, tokens & embeddings", hours: 5, description: "Preprocess text, inspect tokens and understand embeddings as numerical representations of meaning.", outcome: "Compare text similarity with embeddings." },
      { title: "How large language models work", hours: 6, description: "Build a practical mental model of transformer-based language models, context windows and generation.", outcome: "Explain a prompt-to-response flow in your own words." },
      { title: "Prompting & retrieval-augmented generation", hours: 7, description: "Write structured prompts, retrieve relevant documents and connect grounded context to model responses.", outcome: "Prototype a small Q&A assistant over your notes." },
      { title: "Evaluate responsibly", hours: 5, description: "Create a small evaluation set, check grounding and failure cases, protect sensitive information and disclose limitations.", outcome: "Document quality checks for your prototype." }
    ]
  },
  {
    title: "AI engineering & portfolio",
    subtitle: "Make projects usable, repeatable and easy for others to understand.",
    hours: 26,
    modules: [
      { title: "Serve a model with an API", hours: 5, description: "Expose a trained model through a small Python API, validate inputs and return useful errors.", outcome: "Run a local prediction endpoint." },
      { title: "Reproducible projects & deployment basics", hours: 5, description: "Organize a repository, manage dependencies, track experiments and learn what containers and deployment solve.", outcome: "Write a setup guide another student can follow." },
      { title: "Capstone: data to working AI app", hours: 12, description: "Pick a meaningful, manageable problem. Build a data pipeline, a baseline model or AI feature, an interface and an evaluation.", outcome: "Ship one end-to-end project with a demo and README." },
      { title: "Portfolio, ethics & next steps", hours: 4, description: "Present your decisions, results and limitations. Review privacy, bias, accessibility and what to learn next.", outcome: "Publish a portfolio entry and a short project walkthrough." }
    ]
  }
];

academyTracks.forEach(track => {
  const trackIndex = tracks.length;
  const modules = track.lessons.map((lesson, moduleIndex) => {
    const id = `${trackIndex}-${moduleIndex}`;
    lessonMaterials[id] = {
      intro: lesson.intro, points: lesson.points, exampleLabel: lesson.example,
      code: lesson.code, practice: lesson.practice, question: lesson.recall, answer: lesson.answer
    };
    lessonEnrichments[id] = { story: lesson.scenario, steps: lesson.steps, visual: "ml-pipeline", assessment: lesson.quiz };
    realWorldExamples[id] = { title: lesson.example, scenario: lesson.scenario, explanation: lesson.insight };
    lessonDeepDives[id] = {
      analogy: lesson.analogy, steps: lesson.steps, connection: lesson.connection,
      question: lesson.recall, answer: lesson.answer
    };
    return { title: lesson.title, hours: lesson.hours, description: lesson.description, outcome: lesson.outcome };
  });
  tracks.push({ title: track.title, subtitle: track.subtitle, hours: modules.reduce((sum, module) => sum + module.hours, 0), modules });
});

const STORAGE_KEY = "fieldnotes-ai-academy-v1";
const STORAGE_PREFIX = `${STORAGE_KEY}:`;
let storageIssue = null;
const allModules = tracks.flatMap((track, trackIndex) =>
  track.modules.map((module, moduleIndex) => ({
    ...module,
    id: `${trackIndex}-${moduleIndex}`,
    trackIndex
  }))
);
const state = loadState();
let activeFilter = "All tracks";
let searchTerm = "";
const collapsedFilteredTracks = new Set();
let toastTimeout;
let currentLessonIndex = 0;
let quizSession = null;
let inlineCheckSession = null;

const trackList = document.getElementById("track-list");
const filterList = document.getElementById("filter-list");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");
const completionLabel = document.getElementById("completion-label");
const completionBar = document.getElementById("completion-bar");
const moduleCount = document.getElementById("module-count");
const timeDisplay = document.getElementById("time-display");
const timerStatus = document.getElementById("timer-status");
const timerButton = document.getElementById("timer-button");
const toast = document.getElementById("toast");
const lessonDialog = document.getElementById("lesson-dialog");
const lessonContent = document.getElementById("lesson-content");
const lessonTrackLabel = document.getElementById("lesson-track-label");
const lessonPosition = document.getElementById("lesson-position");
const lessonPrevious = document.getElementById("lesson-previous");
const lessonNext = document.getElementById("lesson-next");
const assessmentDialog = document.getElementById("assessment-dialog");
const assessmentBody = document.getElementById("assessment-body");
const assessmentTrackLabel = document.getElementById("assessment-track-label");
const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");
const backToTopButton = document.getElementById("back-to-top");
const settingsDialog = document.getElementById("settings-dialog");
const settingsButton = document.getElementById("settings-button");
const settingsForm = document.getElementById("settings-form");
const careerOptions = document.getElementById("career-options");
const careerSummary = document.getElementById("career-summary");

function loadState() {
  let readingKey = STORAGE_KEY;
  let invalidKey = null;
  function parseRecord(raw) {
    try {
      return JSON.parse(raw);
    } catch (error) {
      if (error instanceof SyntaxError) invalidKey = readingKey;
      throw error;
    }
  }
  function invalidRecord(message) {
    invalidKey = readingKey;
    throw new Error(message);
  }
  try {
    const rawSaved = localStorage.getItem(STORAGE_KEY);
    const saved = parseRecord(rawSaved === null ? "{}" : rawSaved);
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) invalidRecord("Invalid saved progress record.");
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (!key || !key.startsWith(STORAGE_PREFIX)) continue;
      const [section, item] = key.slice(STORAGE_PREFIX.length).split(":");
      if (!["completed", "assessments", "preferences", "timing", "role"].includes(section)) continue;
      readingKey = key;
      const value = parseRecord(localStorage.getItem(key));
      if (section === "completed" || section === "assessments" || section === "preferences") {
        if (!item) invalidRecord("Invalid saved progress key.");
        if (!saved[section] || typeof saved[section] !== "object" || Array.isArray(saved[section])) saved[section] = {};
        saved[section][item] = value;
      } else if (section === "timing") {
        if (!value || typeof value !== "object" || Array.isArray(value)) invalidRecord("Invalid saved timer.");
        saved.seconds = value.seconds;
        saved.active = value.active;
      } else if (section === "role") {
        saved.role = value;
      }
    }
    const savedPreferences = saved.preferences && typeof saved.preferences === "object" ? saved.preferences : {};
    storageIssue = null;
    return {
      completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {},
      assessments: saved.assessments && typeof saved.assessments === "object" ? saved.assessments : {},
      seconds: Number.isFinite(saved.seconds) && saved.seconds >= 0 ? Math.floor(saved.seconds) : 0,
      active: saved.active && typeof saved.active.moduleId === "string" && Number.isFinite(saved.active.startedAt) ? saved.active : null,
      role: Object.prototype.hasOwnProperty.call(careerPaths, saved.role) ? saved.role : "all",
      preferences: {
        theme: ["light", "dark"].includes(savedPreferences.theme) ? savedPreferences.theme : "light",
        weeklyHours: [4, 6, 8, 10, 12].includes(savedPreferences.weeklyHours) ? savedPreferences.weeklyHours : 8,
        readingSize: ["normal", "large"].includes(savedPreferences.readingSize) ? savedPreferences.readingSize : "normal",
        accent: ["sage", "ocean", "plum"].includes(savedPreferences.accent) ? savedPreferences.accent : "plum",
        diagramMotion: typeof savedPreferences.diagramMotion === "boolean" ? savedPreferences.diagramMotion : null
      }
    };
  } catch (error) {
    console.error("Could not read saved learning progress.", error);
    storageIssue = { key: invalidKey, error };
    return { completed: {}, assessments: {}, seconds: 0, active: null, role: "all", preferences: { theme: "light", weeklyHours: 8, readingSize: "normal", accent: "plum", diagramMotion: null } };
  }
}

function showStorageWarning() {
  const warning = document.getElementById("storage-warning");
  warning.hidden = false;
  document.getElementById("storage-warning-message").textContent = storageIssue && storageIssue.key
    ? "A saved record could not be read. Changes cannot be saved until it is resolved. Download a backup before removing the damaged record."
    : "Browser storage could not be accessed or updated. Some changes may have been saved. Check permissions and available space.";
  document.getElementById("storage-reset").disabled = !storageIssue || !storageIssue.key;
}

function syncSavedState() {
  const latest = loadState();
  if (storageIssue) {
    showStorageWarning();
    return false;
  }
  Object.assign(state, latest);
  return true;
}

function saveState(changes) {
  if (!syncSavedState()) return false;
  try {
    for (const [section, value] of Object.entries(changes)) {
      if (section === "completed" || section === "assessments" || section === "preferences") {
        for (const [item, itemValue] of Object.entries(value)) {
          localStorage.setItem(`${STORAGE_PREFIX}${section}:${item}`, JSON.stringify(itemValue));
        }
      } else {
        localStorage.setItem(`${STORAGE_PREFIX}${section}`, JSON.stringify(value));
      }
    }
    const saved = syncSavedState();
    if (saved) document.getElementById("storage-warning").hidden = true;
    return saved;
  } catch (error) {
    console.error("Could not save learning progress.", error);
    syncSavedState();
    showStorageWarning();
    return false;
  }
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return [hours, minutes, remainder].map(value => String(value).padStart(2, "0")).join(":");
}

function modulesForPath(role = state.role) {
  const path = careerPaths[role];
  return allModules.filter(module => {
    if (module.trackIndex < 6) return true;
    const selected = module.trackIndex < 9 ? path.intermediate : path.advanced;
    return selected === null || selected.includes(module.id);
  });
}

function renderCareerPaths() {
  careerOptions.innerHTML = Object.entries(careerPaths).map(([id, path], index) => `
    <button class="career-option ${id === "all" ? "career-option--hub" : `career-option--petal career-option--${id}`}${state.role === id ? " active" : ""}" type="button" data-role="${id}" aria-pressed="${state.role === id}">
      <span class="career-kicker">${id === "all" ? "THE SHARED FOUNDATION" : `PATH 0${index}`}</span>
      <strong>${escapeHtml(path.title)}</strong>
      ${id === "all"
        ? `<span class="career-hub-caption">One foundation. Three directions.</span><span class="career-hub-hint career-hub-hint--hover">Hover or focus to explore</span><span class="career-hub-hint career-hub-hint--touch">Choose a path below</span>`
        : `<span class="career-description">${escapeHtml(path.description)}</span><span class="career-count">${modulesForPath(id).length} MODULES <span aria-hidden="true">↗</span></span>`}
    </button>
  `).join("");
  const path = careerPaths[state.role];
  const count = modulesForPath().length;
  careerSummary.innerHTML = `<strong>${escapeHtml(path.title)}</strong><span>${escapeHtml(path.focus)} ${count} modules in this route.</span>`;
}

function renderFilters() {
  const pathTrackIndexes = new Set(modulesForPath().map(module => module.trackIndex));
  const filters = ["All tracks", ...tracks.filter((_, index) => pathTrackIndexes.has(index)).map(track => track.title)];
  filterList.innerHTML = filters.map(filter => `
    <button class="filter-button${filter === activeFilter ? " active" : ""}" type="button" data-filter="${escapeAttribute(filter)}" aria-pressed="${filter === activeFilter}">
      ${escapeHtml(filter)}
    </button>
  `).join("");
}

function renderTracks() {
  let visibleCount = 0;
  const pathIds = new Set(modulesForPath().map(module => module.id));
  trackList.innerHTML = tracks.map((track, trackIndex) => {
    const pathTrackModules = track.modules.map((module, moduleIndex) => ({
      ...module,
      id: `${trackIndex}-${moduleIndex}`
    })).filter(module => pathIds.has(module.id));
    const filteredModules = pathTrackModules.filter(module => {
      const matchesSearch = `${module.title} ${module.description} ${module.outcome} ${track.title}`.toLowerCase().includes(searchTerm);
      return matchesSearch && (activeFilter === "All tracks" || activeFilter === track.title);
    });

    if (!filteredModules.length) return "";
    visibleCount += filteredModules.length;
    const completedCount = pathTrackModules.filter(module => state.completed[module.id]).length;
    const progress = Math.round(completedCount / pathTrackModules.length * 100);
    const pathHours = pathTrackModules.reduce((sum, module) => sum + module.hours, 0);
    const isFiltering = searchTerm || activeFilter !== "All tracks";
    const isOpen = isFiltering ? !collapsedFilteredTracks.has(trackIndex) : state.openTrack === trackIndex;

    return `
      <article class="track-card${isOpen ? " open" : ""}" data-track="${trackIndex}">
        <button type="button" class="track-header" aria-expanded="${Boolean(isOpen)}" aria-controls="modules-${trackIndex}">
          <span class="track-number">${String(trackIndex + 1).padStart(2, "0")}</span>
          <span class="track-title-wrap">
            <span class="track-title">${escapeHtml(track.title)}</span>
            <span class="track-subtitle">${escapeHtml(track.subtitle)}</span>
          </span>
          <span class="track-hours">${pathHours} hrs</span>
          <span class="track-progress"><span class="mini-progress"><span style="width:${progress}%"></span></span>${completedCount}/${pathTrackModules.length}</span>
          <span class="chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="module-list" id="modules-${trackIndex}">
          ${filteredModules.map(module => {
            const done = Boolean(state.completed[module.id]);
            const isActive = state.active && state.active.moduleId === module.id;
            const assessment = state.assessments[module.id];
            return `
              <div class="module-row${done ? " is-complete" : ""}">
                <input class="module-check" type="checkbox" data-module-check="${module.id}" aria-label="Mark ${escapeAttribute(module.title)} complete" ${done ? "checked" : ""}>
                <span class="module-info">
                  <span class="module-name">${escapeHtml(module.title)}</span>
                  <span class="module-path-label">${trackIndex < 6 ? "SHARED FOUNDATION" : `RECOMMENDED FOR: ${escapeHtml(Object.entries(careerPaths).filter(([id, path]) => id !== "all" && (trackIndex < 9 ? path.intermediate : path.advanced).includes(module.id)).map(([, path]) => path.title).join(" · "))}`}</span>
                  <span class="module-description">${escapeHtml(module.description)}</span>
                  <span class="module-outcome">↳ ${escapeHtml(module.outcome)}</span>
                </span>
                <span class="module-duration">${module.hours} hrs</span>
                <span class="module-actions">
                  <button class="module-lesson" type="button" data-open-lesson="${module.id}">Read lesson</button>
                  <button class="module-start${isActive ? " is-active" : ""}" type="button" data-start-module="${module.id}">${isActive ? "Pause timer" : "Study this"}</button>
                  ${done ? `<button class="module-quiz${assessment && assessment.passed ? " passed" : ""}" type="button" data-open-assessment="${module.id}">${assessment && assessment.passed ? "Assessment ✓" : "Take assessment"}</button>` : ""}
                </span>
              </div>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");

  noResults.hidden = visibleCount > 0;
  updateProgress();
  updateTimer();
}

function updateProgress() {
  const pathModules = modulesForPath();
  const completed = pathModules.filter(module => state.completed[module.id]).length;
  const percentage = Math.round(completed / pathModules.length * 100);
  completionLabel.textContent = `${percentage}% complete`;
  completionBar.style.width = `${percentage}%`;
  moduleCount.textContent = `${completed} of ${pathModules.length} modules`;
}

function updateTimer() {
  const elapsed = state.active
    ? Math.max(0, Math.floor((Date.now() - state.active.startedAt) / 1000))
    : 0;
  timeDisplay.textContent = formatTime(state.seconds + elapsed);
  const activeModule = state.active && allModules.find(module => module.id === state.active.moduleId);
  timerStatus.textContent = activeModule ? `Studying: ${activeModule.title}` : "Ready when you are";
  timerButton.disabled = !state.active;
  timerButton.textContent = state.active ? "Pause timer" : "Start a module";
}

function stopTimer() {
  if (!syncSavedState()) return false;
  if (!state.active) return false;
  const elapsed = Math.max(0, Math.floor((Date.now() - state.active.startedAt) / 1000));
  if (!saveState({ timing: { seconds: state.seconds + elapsed, active: null } })) return false;
  renderTracks();
  return true;
}

function toggleTimer(moduleId) {
  if (!syncSavedState()) return;
  if (state.active && state.active.moduleId === moduleId) {
    if (stopTimer()) showToast("Study timer paused.");
    return;
  }
  const elapsed = state.active ? Math.max(0, Math.floor((Date.now() - state.active.startedAt) / 1000)) : 0;
  if (!saveState({ timing: { seconds: state.seconds + elapsed, active: { moduleId, startedAt: Date.now() } } })) return;
  renderTracks();
  showToast("Study timer started. You’ve got this.");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

function shuffleQuestion(question) {
  const options = shuffle(question[1].map((text, index) => ({ text, correct: index === question[2] })));
  return [question[0], options.map(option => option.text), options.findIndex(option => option.correct), question[3]];
}

function assessmentQuestions(moduleId) {
  return shuffle(lessonEnrichments[moduleId].assessment.map(shuffleQuestion));
}

const visualPresets = {
  "ai-flow": ["Examples", "Training", "Model", "Prediction"],
  workspace: ["Write code", "Run Python", "Check output", "Save with Git"],
  steps: ["Goal", "Inputs", "Small steps", "Test result"],
  "value-flow": ["Text input", "Convert type", "Calculate", "Show units"],
  decision: ["Read score", "Check rule", "Choose path", "Count result"],
  function: ["Input marks", "Average()", "Return value", "Show result"],
  collections: ["Student", "Name key", "Marks list", "Average"],
  "file-flow": ["Expense entry", "Validate row", "Save file", "Read total"],
  objects: ["Book class", "Book A", "Book B", "Borrow state"],
  table: ["Students", "Filter year", "Sort names", "Course list"],
  join: ["Students", "Student ID", "Enrollments", "Joined report"],
  aggregate: ["Enrollments", "Group course", "Count rows", "Popular course"],
  schema: ["Student key", "Course key", "Enrollment", "Valid records"],
  vector: ["Quiz scores", "Same features", "Compare vectors", "Similarity"],
  matrix: ["Point (x,y)", "Scale matrix", "Multiply", "New point"],
  distribution: ["Class scores", "Sort values", "Mean / median", "Typical score"],
  gradient: ["Current model", "Measure loss", "Follow slope", "Update weights"],
  array: ["Sensor values", "Build array", "Filter safely", "Summarize"],
  dataframe: ["Survey CSV", "Inspect blanks", "Clean rows", "Group results"],
  chart: ["Course scores", "Choose chart", "Label axes", "Explain pattern"],
  eda: ["Ask question", "Check data", "Explore patterns", "State caveats"],
  "ml-pipeline": ["Define target", "Split data", "Train baseline", "Test once"],
  regression: ["Trip features", "Fit line", "Predict time", "Measure error"],
  confusion: ["Model labels", "Compare truth", "Count errors", "Choose threshold"],
  tree: ["Ask question", "Follow branch", "Reach a leaf", "Check new cases"],
  "cross-validation": ["Split folds", "Fit pipeline", "Compare scores", "Final test"],
  neuron: ["Input features", "Weighted layers", "Calculate loss", "Update weights"],
  "training-loop": ["Make tensors", "Predict batch", "Find gradients", "Update model"],
  cnn: ["Image pixels", "Find local edges", "Combine features", "Predict class"],
  attention: ["Token vectors", "Compare tokens", "Mix context", "Predict next"],
  embedding: ["Student question", "Meaning vector", "Find closest note", "Verify source"],
  "next-token": ["Prompt context", "Score tokens", "Choose next", "Generate text"],
  rag: ["Course notes", "Retrieve passages", "Ground prompt", "Answer with source"],
  evaluation: ["Test question", "Inspect evidence", "Score response", "Improve safely"],
  api: ["Web request", "Validate input", "Run model", "Return JSON"],
  project: ["Project files", "Record setup", "Run tests", "Reproduce result"],
  capstone: ["Choose user need", "Build baseline", "Create app", "Test & demo"],
  portfolio: ["Problem & user", "Show evidence", "Explain limits", "Share project"]
};

const advancedVisualPresets = {
  "9-0": ["Set prior", "See evidence", "Update belief", "Assess risk"],
  "9-1": ["Define target", "Split by time", "Train model", "Test on new data"],
  "9-2": ["Choose features", "Scale values", "Group examples", "Review groups"],
  "9-3": ["Observe state", "Choose action", "Receive reward", "Evaluate policy"],
  "10-0": ["Input tokens", "Apply attention", "Score next token", "Sample output"],
  "10-1": ["Define task", "Review license", "Pin model", "Evaluate locally"],
  "10-2": ["Embed query", "Filter access", "Rank passages", "Check sources"],
  "10-3": ["Index sources", "Retrieve", "Ground prompt", "Cite or abstain"],
  "10-4": ["Create tests", "Inspect sources", "Score answers", "Review failures"],
  "11-0": ["User question", "Use context", "Find evidence", "Reply or clarify"],
  "11-1": ["Set boundaries", "Call read tool", "Check result", "Stop or respond"],
  "11-2": ["Version assets", "Validate release", "Monitor system", "Investigate"],
  "11-3": ["Define problem", "Show baseline", "Review risks", "Document handoff"],
  "11-4": ["Host", "Client", "Authorize", "Read tool"],
  "11-5": ["Request", "Observe", "Propose", "Approve"]
};
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function diagramMotionEnabled() {
  return state.preferences.diagramMotion === null ? !reducedMotion.matches : state.preferences.diagramMotion;
}

function updateDiagramMotion(figure, enabled) {
  figure.dataset.playing = String(enabled);
  figure.querySelector("[data-animation-toggle]").setAttribute("aria-pressed", String(enabled));
  figure.querySelector("[data-motion-status]").textContent = enabled ? "Playing" : "Paused";
}

function createEmbeddingIllustration(playing) {
  return `
    <figure class="lesson-visual embedding-visual" data-playing="${playing}">
      <div class="visual-toolbar"><span>INSIDE A MEANING VECTOR</span><span class="visual-controls"><span data-motion-status>${playing ? "Playing" : "Paused"}</span><button type="button" data-animation-toggle aria-pressed="${playing}">Animate diagram</button></span></div>
      <div class="embedding-demo">
        <p class="embedding-lead">A meaning vector is a list of numbers produced from text. The model learns a space where related text can have similar directions.</p>
        <div class="embedding-pipeline">
          <section class="embedding-stage embedding-input">
            <span class="embedding-step">01 · TEXT</span>
            <strong>Student asks</strong>
            <p>“How do I submit my lab?”</p>
          </section>
          <section class="embedding-stage embedding-encoder">
            <span class="embedding-step">02 · ENCODER</span>
            <strong>Example: MiniLM</strong>
            <p>A tokenizer splits text into pieces. A transformer processes them; pooling combines their representations.</p>
            <div class="embedding-tokens" aria-hidden="true"><span>how</span><span>submit</span><span>lab</span></div>
            <span class="embedding-process">Shown words are illustrative; actual tokens can differ.</span>
          </section>
          <section class="embedding-stage embedding-output">
            <span class="embedding-step">03 · VECTOR</span>
            <strong>Illustrative 2-number vector</strong>
            <div class="embedding-values" aria-label="Example vector: 0.80, 0.60"><span class="embedding-value-first">0.80</span><span class="embedding-value-second">0.60</span></div>
            <span class="embedding-process">A real MiniLM vector has 384 numbers.</span>
          </section>
        </div>
        <p class="embedding-example-note"><strong>Teaching example:</strong> The 2D numbers below are hand-picked, not MiniLM output. Individual dimensions do not have fixed labels such as “lab” or “submission.”</p>
        <div class="embedding-comparison">
          <div class="embedding-plot">
            <span class="embedding-step">04 · COMPARE DIRECTIONS</span>
            <svg viewBox="0 0 300 185" role="img" aria-label="Toy vector plot: the question and lab note point in similar directions, while the café note points in a different direction.">
              <path d="M25 150H275M150 170V15" fill="none" stroke="#aabbb0" stroke-width="1"/>
              <text x="237" y="169">dim 1</text><text x="155" y="20">dim 2</text>
              <path class="embedding-arrow embedding-arrow-query" d="M150 150 222 96" fill="none" stroke="#315c96" stroke-width="3" stroke-linecap="round"/>
              <path class="embedding-arrow embedding-arrow-match" d="M150 150 204 78" fill="none" stroke="#388267" stroke-width="3" stroke-linecap="round"/>
              <path class="embedding-arrow embedding-arrow-other" d="M150 150 78 96" fill="none" stroke="#a5634e" stroke-width="3" stroke-linecap="round"/>
              <circle class="embedding-dot-query" cx="222" cy="96" r="4" fill="#315c96"/><text x="227" y="99">Q</text>
              <circle class="embedding-dot-match" cx="204" cy="78" r="4" fill="#388267"/><text x="209" y="75">A</text>
              <circle class="embedding-dot-other" cx="78" cy="96" r="4" fill="#a5634e"/><text x="62" y="95">B</text>
            </svg>
          </div>
          <div class="embedding-results">
            <div class="embedding-result embedding-question"><strong>Q · Student question</strong><span>[0.80, 0.60]</span></div>
            <div class="embedding-result embedding-match"><strong>A · Lab upload note</strong><span>[0.60, 0.80] · cosine 0.96</span></div>
            <div class="embedding-result embedding-other"><strong>B · Café hours note</strong><span>[-0.80, 0.60] · cosine −0.28</span></div>
          </div>
        </div>
        <div class="embedding-explanation">
          <strong>Why is A closer?</strong>
          <p>Cosine similarity compares direction. These toy vectors have length 1, so Q · A = (0.80 × 0.60) + (0.60 × 0.80) = <strong>0.96</strong>. Q · B = <strong>−0.28</strong>. A ranks higher.</p>
          <p>Open the result and check it: a high score does not prove that the passage answers the question.</p>
        </div>
      </div>
      <figcaption>Illustration only: no embedding model runs in this page. In a real system, encode the question and approved passages with the same model, then evaluate the results.</figcaption>
    </figure>
  `;
}

function createIllustration(module, extra) {
  const playing = diagramMotionEnabled();
  if (module.id === "7-0") return createEmbeddingIllustration(playing);
  const labels = advancedVisualPresets[module.id] || visualPresets[extra.visual] || ["Question", "Explore", "Build", "Review"];
  const scenes = lessonVisualScenes[module.id];
  if (!scenes || scenes.length !== labels.length || scenes.some(([icon]) => !Object.prototype.hasOwnProperty.call(lessonSceneIcons, icon))) {
    console.error(`Missing illustrated walkthrough for module ${module.id}.`);
    showToast("This lesson's illustrated walkthrough is unavailable.");
    return "";
  }
  const xPositions = [18, 174, 330, 486];
  const colors = ["#eef3e8", "#f7eee3", "#edf1f8", "#f5ebed"];
  const nodes = labels.map((label, index) => {
    const x = xPositions[index];
    const [icon, detail] = scenes[index];
    return `
      <g class="visual-node visual-node-${index + 1}">
        <rect class="visual-node-box" x="${x}" y="43" width="128" height="135" rx="11" fill="${colors[index]}" stroke="#e4e9e1"/>
        <circle cx="${x + 19}" cy="62" r="10" fill="#ffffff"/>
        <text x="${x + 19}" y="66" text-anchor="middle" class="visual-step">${index + 1}</text>
        <g transform="translate(${x + 43} 74) scale(1.16)" aria-hidden="true">
          <g class="visual-scene-object" fill="none" stroke="#486678" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${lessonSceneIcons[icon]}</g>
        </g>
        <text x="${x + 64}" y="141" text-anchor="middle" class="visual-label">${escapeHtml(label)}</text>
        <text x="${x + 64}" y="160" text-anchor="middle" class="visual-detail">${escapeHtml(detail)}</text>
      </g>
      ${index < labels.length - 1 ? `
        <g class="visual-link visual-link-${index + 1}" aria-hidden="true">
          <path class="visual-connector" d="M${x + 130} 108h17m-5-5 5 5-5 5" fill="none" stroke="#92a68b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      ` : ""}
    `;
  }).join("");

  return `
    <figure class="lesson-visual" data-playing="${playing}">
      <div class="visual-toolbar"><span>FOLLOW THE FOUR STEPS <span class="visual-scroll-hint">· Scroll sideways</span></span><span class="visual-controls"><span data-motion-status>${playing ? "Playing" : "Paused"}</span><button type="button" data-animation-toggle aria-pressed="${playing}">Animate diagram</button></span></div>
      <div class="visual-canvas" tabindex="0" role="region" aria-label="Walkthrough diagram; scroll horizontally to see every step">
        <svg viewBox="0 0 632 200" role="img" aria-label="${escapeAttribute(`${module.title}: ${labels.map((label, index) => `${label} (${scenes[index][1]})`).join(" → ")}`)}">
          <defs><linearGradient id="walkthrough-background" x2="1" y2="1"><stop stop-color="#f8fbf8"/><stop offset="1" stop-color="#f3f5fd"/></linearGradient></defs>
          <rect x="0" y="0" width="632" height="200" rx="11" fill="url(#walkthrough-background)"/>
          <text x="20" y="24" class="visual-kicker">ILLUSTRATED SCENARIO</text>
          ${nodes}
        </svg>
      </div>
      <figcaption>${escapeHtml(extra.story)}${lessonModelExamples[module.id] ? `<span class="visual-model-example">${escapeHtml(lessonModelExamples[module.id])}</span>` : ""}</figcaption>
    </figure>
  `;
}

function openLesson(moduleId) {
  const index = allModules.findIndex(module => module.id === moduleId);
  if (index < 0) return;
  currentLessonIndex = index;
  renderLesson();
  lessonDialog.showModal();
}

function renderLesson() {
  const module = allModules[currentLessonIndex];
  const lesson = lessonMaterials[module.id];
  const extra = lessonEnrichments[module.id];
  const realWorld = realWorldExamples[module.id];
  const deepDive = lessonDeepDives[module.id];
  if (!lesson || !extra || !realWorld || !deepDive) {
    console.error(`Missing lesson content for module ${module.id}.`);
    showToast("This lesson's material is unavailable.");
    lessonDialog.close();
    return;
  }
  lessonTrackLabel.textContent = tracks[module.trackIndex].title.toUpperCase();
  const pathModules = modulesForPath();
  const pathIndex = pathModules.findIndex(item => item.id === module.id);
  lessonPosition.textContent = `${pathIndex + 1} / ${pathModules.length}`;
  lessonPrevious.disabled = pathIndex <= 0;
  lessonNext.disabled = pathIndex === pathModules.length - 1;
  const inlineQuestion = shuffleQuestion(extra.assessment[0]);
  inlineCheckSession = { moduleId: module.id, question: inlineQuestion, selected: null, misses: 0, answered: false };
  lessonContent.innerHTML = `
    <p class="eyebrow">A GENTLE STEP-BY-STEP LESSON · ${module.hours} HOURS</p>
    <h2 id="lesson-title">${escapeHtml(module.title)}</h2>
    <h3>In simple words</h3>
    <p>${escapeHtml(lesson.intro)}</p>
    <aside class="lesson-story"><span class="lesson-story-mark" aria-hidden="true">✳</span><p><strong>Imagine this:</strong> ${escapeHtml(extra.story)}</p></aside>
    ${createIllustration(module, extra)}
    <h3>Let's work through it one step at a time</h3>
    <ol class="lesson-steps">${extra.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    <h3>The key ideas</h3>
    <ul class="lesson-points">${lesson.points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    <h3>Worked example: ${escapeHtml(lesson.exampleLabel)}</h3>
    ${lesson.prerequisites ? `<p><strong>Before you run this:</strong> ${escapeHtml(lesson.prerequisites)}</p>` : ""}
    <div class="lesson-code"><div class="lesson-code-label">${module.trackIndex < 9 ? "FOLLOW ALONG · TRY CHANGING ONE VALUE" : "WORKED SCENARIO · FOLLOW THE STEPS"}</div><pre><code>${escapeHtml(lesson.code)}</code></pre></div>
    <h3>Real-world example: ${escapeHtml(realWorld.title)}</h3>
    <p>${escapeHtml(realWorld.scenario)}</p>
    ${realWorld.code ? `<div class="lesson-code"><div class="lesson-code-label">RUN LOCALLY · PYTHON STANDARD LIBRARY</div><pre><code>${escapeHtml(realWorld.code)}</code></pre></div>` : ""}
    <p>${escapeHtml(realWorld.explanation)}</p>
    <section aria-labelledby="deep-dive-title">
      <h3 id="deep-dive-title">Level 2: Make it stick</h3>
      <aside class="lesson-story"><span class="lesson-story-mark" aria-hidden="true">✳</span><p><strong>Picture it:</strong> ${escapeHtml(deepDive.analogy)}</p></aside>
      <p><strong>Think it through, one step at a time:</strong></p>
      <ol class="lesson-steps">${deepDive.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      <p><strong>Connect it to AI engineering:</strong> ${escapeHtml(deepDive.connection)}</p>
      <p><strong>Recall challenge:</strong> Try answering before opening the explanation.</p>
      <details class="lesson-check"><summary>${escapeHtml(deepDive.question)}</summary><p>${escapeHtml(deepDive.answer)}</p></details>
      <p>To practice remembering, try explaining this idea without looking tomorrow and again in a week.</p>
    </section>
    <h3>Your turn</h3>
    <div class="lesson-practice">${escapeHtml(lesson.practice)}</div>
    ${["8-2", "10-3"].includes(module.id) ? `<p>Continue with the <a class="lab-project-link" href="mentor-project.html">mentor-led workplace assistant project</a>.</p>` : ""}
    <h3>Check your understanding</h3>
    <details class="lesson-check"><summary>${escapeHtml(lesson.question)} Reveal the explanation</summary><p>${escapeHtml(lesson.answer)}</p></details>
    <section class="inline-assessment" aria-label="Interactive lesson question">
      <p class="eyebrow">QUICK PICK · ANSWER AS YOU LEARN</p>
      <fieldset class="inline-question">
        <legend>${escapeHtml(inlineQuestion[0])}</legend>
        ${inlineQuestion[1].map((choice, index) => `
          <label class="inline-option">
            <input type="radio" name="inline-answer" value="${index}">
            <span>${escapeHtml(choice)}</span>
          </label>
        `).join("")}
      </fieldset>
      <div class="inline-feedback" data-inline-feedback role="status" hidden></div>
      <div class="inline-actions" data-inline-actions>
        <button type="button" class="inline-check-button" data-inline-action="check" disabled>Check my answer</button>
      </div>
    </section>
  `;
  lessonContent.scrollTop = 0;
}

function revealInlineAnswer(question, feedback, actions, correctMessage) {
  const answer = question[1][question[2]];
  feedback.hidden = false;
  feedback.className = "inline-feedback correct";
  feedback.innerHTML = `<strong>${correctMessage}</strong> <span>Answer: ${escapeHtml(answer)}.</span> ${escapeHtml(question[3])}`;
  actions.innerHTML = `<span class="inline-encouragement">Nice work—keep going with the lesson.</span>`;
  lessonContent.querySelectorAll('input[name="inline-answer"]').forEach(input => {
    input.disabled = true;
    if (Number(input.value) === question[2]) input.closest(".inline-option").classList.add("is-correct");
  });
  inlineCheckSession.answered = true;
}

function handleInlineAction(action) {
  if (!inlineCheckSession) return;
  const question = inlineCheckSession.question;
  const feedback = lessonContent.querySelector("[data-inline-feedback]");
  const actions = lessonContent.querySelector("[data-inline-actions]");

  if (action === "check" && inlineCheckSession.selected !== null && !inlineCheckSession.answered) {
    if (inlineCheckSession.selected === question[2]) {
      revealInlineAnswer(question, feedback, actions, "That's the correct choice!");
      return;
    }

    inlineCheckSession.misses += 1;
    const selected = lessonContent.querySelector(`input[name="inline-answer"][value="${inlineCheckSession.selected}"]`);
    if (selected) selected.closest(".inline-option").classList.add("is-incorrect");
    feedback.hidden = false;
    feedback.className = "inline-feedback incorrect";
    feedback.innerHTML = `<strong>Not quite yet.</strong> ${inlineCheckSession.misses === 1 ? "Think about the example, try once more, or reveal the answer." : "Try another option, or reveal the answer when you're ready."}`;
    actions.innerHTML = `
      <button type="button" class="inline-check-button secondary" data-inline-action="try-again">Try another option</button>
      <button type="button" class="inline-check-button" data-inline-action="reveal">Show answer</button>
    `;
  } else if (action === "try-again" && !inlineCheckSession.answered) {
    inlineCheckSession.selected = null;
    lessonContent.querySelectorAll('input[name="inline-answer"]').forEach(input => {
      input.checked = false;
      input.closest(".inline-option").classList.remove("is-incorrect");
    });
    feedback.hidden = true;
    actions.innerHTML = `<button type="button" class="inline-check-button" data-inline-action="check" disabled>Check my answer</button>`;
  } else if (action === "reveal" && !inlineCheckSession.answered) {
    revealInlineAnswer(question, feedback, actions, "Here is the answer.");
  }
}

function showAssessment(moduleId) {
  const module = allModules.find(item => item.id === moduleId);
  const extra = lessonEnrichments[moduleId];
  if (!module || !extra || extra.assessment.length < 3) {
    console.error(`Missing assessment for module ${moduleId}.`);
    showToast("This assessment is unavailable.");
    return;
  }
  if (!state.completed[moduleId]) {
    showToast("Finish the lesson and mark the module complete to unlock its assessment.");
    return;
  }
  quizSession = { moduleId, questions: assessmentQuestions(moduleId), index: 0, selected: null, submitted: false, score: 0, complete: false };
  assessmentTrackLabel.textContent = `${tracks[module.trackIndex].title.toUpperCase()} · QUICK CHECK`;
  renderAssessment();
  assessmentDialog.showModal();
}

function finishAssessment() {
  const moduleId = quizSession.moduleId;
  const questions = quizSession.questions;
  const passed = quizSession.score >= Math.ceil(questions.length * 2 / 3);
  const canSave = syncSavedState();
  const previous = state.assessments[moduleId] || { attempts: 0, bestScore: 0, passed: false };
  const result = {
    attempts: previous.attempts + 1,
    bestScore: Math.max(previous.bestScore, quizSession.score),
    passed: previous.passed || passed
  };
  quizSession.complete = true;
  quizSession.passed = passed;
  quizSession.saved = canSave && saveState({ assessments: { [moduleId]: result } });
  renderTracks();
  renderAssessment();
}

function renderAssessment() {
  if (!quizSession) return;
  const questions = quizSession.questions;
  if (quizSession.complete) {
    const total = questions.length;
    assessmentBody.innerHTML = `
      <div class="assessment-content">
        <div class="assessment-result">
          <span class="assessment-result-mark" aria-hidden="true">${quizSession.passed ? "✓" : "↻"}</span>
          <h2 id="assessment-title">${quizSession.passed ? "Nice work—you passed!" : "Good effort. Review and try again."}</h2>
          <p>You got <strong>${quizSession.score} of ${total}</strong> correct. ${!quizSession.saved ? "Your result could not be saved; check the progress warning." : quizSession.passed ? "Your result is saved on this device." : "Open the lesson explanations, then retake the quick check when you're ready."}</p>
        </div>
        <div class="assessment-actions">
          <button type="button" data-quiz-action="close">Close</button>
          <button type="button" class="primary" data-quiz-action="retry">Try again</button>
        </div>
      </div>
    `;
    return;
  }

  const question = questions[quizSession.index];
  const choiceMarkup = question[1].map((choice, index) => `
    <label class="assessment-option">
      <input type="radio" name="assessment-answer" value="${index}" ${quizSession.selected === index ? "checked" : ""} ${quizSession.submitted ? "disabled" : ""}>
      <span>${escapeHtml(choice)}</span>
    </label>
  `).join("");
  const correct = quizSession.submitted && quizSession.selected === question[2];
  assessmentBody.innerHTML = `
    <div class="assessment-content">
      <p class="eyebrow">QUICK CHECK · ${quizSession.index + 1} OF ${questions.length}</p>
      <h2 id="assessment-title">Let's see what stuck.</h2>
      <p class="assessment-intro">Choose the best answer and review each explanation. Two-thirds or more is a pass, and you can retry anytime.</p>
      <div class="assessment-progress"><span style="width:${Math.round((quizSession.index + 1) / questions.length * 100)}%"></span></div>
      <fieldset class="assessment-form">
        <legend>${escapeHtml(question[0])}</legend>
        ${choiceMarkup}
      </fieldset>
      ${quizSession.submitted ? `<div class="assessment-feedback${correct ? "" : " incorrect"}" role="status"><strong>${correct ? "That's right." : "Not quite."}</strong> ${escapeHtml(question[3])}</div>` : ""}
      <div class="assessment-actions">
        ${quizSession.submitted
          ? `<button type="button" class="primary" data-quiz-action="next">${quizSession.index === questions.length - 1 ? "See my score" : "Next question →"}</button>`
          : `<button type="button" class="primary" data-quiz-action="submit" ${quizSession.selected === null ? "disabled" : ""}>Check answer</button>`}
      </div>
    </div>
  `;
}

function moveLesson(direction) {
  const pathModules = modulesForPath();
  const pathIndex = pathModules.findIndex(module => module.id === allModules[currentLessonIndex].id);
  const nextIndex = Math.max(0, Math.min(pathModules.length - 1, pathIndex + direction));
  currentLessonIndex = allModules.findIndex(module => module.id === pathModules[nextIndex].id);
  renderLesson();
}

function applyPreferences() {
  const preferences = state.preferences;
  document.documentElement.dataset.theme = preferences.theme;
  document.documentElement.dataset.accent = preferences.accent;
  document.documentElement.dataset.readingSize = preferences.readingSize;
  themeButton.setAttribute("aria-pressed", String(preferences.theme === "dark"));
  themeButton.setAttribute("aria-label", `Switch to ${preferences.theme === "dark" ? "light" : "dark"} mode`);
  themeIcon.textContent = preferences.theme === "dark" ? "☀" : "☾";
  themeLabel.textContent = preferences.theme === "dark" ? "Light mode" : "Dark mode";
  document.getElementById("weekly-hours-select").value = String(preferences.weeklyHours);
  document.getElementById("reading-size-select").value = preferences.readingSize;
  const accentInput = settingsForm.querySelector(`input[name="accent"][value="${preferences.accent}"]`);
  if (accentInput) accentInput.checked = true;
  const pathModules = modulesForPath();
  const totalHours = pathModules.reduce((sum, module) => sum + module.hours, 0);
  const weeks = Math.ceil(totalHours / preferences.weeklyHours);
  document.getElementById("course-duration").textContent = `${weeks} weeks`;
  document.getElementById("track-count").textContent = `${new Set(pathModules.map(module => module.trackIndex)).size} learning tracks`;
  document.getElementById("guided-hours").textContent = `${totalHours} guided hours`;
  document.getElementById("weekly-hours-caption").textContent = `at about ${preferences.weeklyHours} hours / week`;
  document.getElementById("schedule-hours").textContent = `${preferences.weeklyHours} hours`;
  document.getElementById("weekly-plan-hours").textContent = `~ ${preferences.weeklyHours} HRS`;
  document.querySelectorAll("[data-hours-share]").forEach(item => {
    item.textContent = formatStudyTime(preferences.weeklyHours * Number(item.dataset.hoursShare));
  });
  document.querySelector('meta[name="theme-color"]').content = preferences.theme === "dark" ? "#171321" : "#f7f5fb";
}

function formatStudyTime(hours) {
  const minutes = Math.round(hours * 60);
  const wholeHours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (!remainingMinutes) return `${wholeHours} ${wholeHours === 1 ? "hr" : "hrs"}`;
  if (!wholeHours) return `${remainingMinutes} min`;
  return `${wholeHours} hr ${remainingMinutes} min`;
}

careerOptions.addEventListener("click", event => {
  const button = event.target.closest("[data-role]");
  if (!button || !Object.prototype.hasOwnProperty.call(careerPaths, button.dataset.role)) return;
  if (!saveState({ role: button.dataset.role })) return;
  activeFilter = "All tracks";
  collapsedFilteredTracks.clear();
  applyPreferences();
  renderCareerPaths();
  renderFilters();
  renderTracks();
  careerOptions.querySelector(`[data-role="${state.role}"]`).focus({ preventScroll: true });
});

filterList.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  collapsedFilteredTracks.clear();
  renderFilters();
  renderTracks();
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  collapsedFilteredTracks.clear();
  renderTracks();
});

trackList.addEventListener("click", event => {
  const lessonButton = event.target.closest("[data-open-lesson]");
  if (lessonButton) {
    openLesson(lessonButton.dataset.openLesson);
    return;
  }
  const assessmentButton = event.target.closest("[data-open-assessment]");
  if (assessmentButton) {
    showAssessment(assessmentButton.dataset.openAssessment);
    return;
  }
  const startButton = event.target.closest("[data-start-module]");
  if (startButton) {
    toggleTimer(startButton.dataset.startModule);
    return;
  }
  const header = event.target.closest(".track-header");
  if (!header) return;
  const card = header.closest(".track-card");
  const trackIndex = Number(card.dataset.track);
  if (searchTerm || activeFilter !== "All tracks") {
    if (card.classList.contains("open")) collapsedFilteredTracks.add(trackIndex);
    else collapsedFilteredTracks.delete(trackIndex);
  } else {
    state.openTrack = card.classList.contains("open") ? null : trackIndex;
  }
  renderTracks();
});

trackList.addEventListener("change", event => {
  const checkbox = event.target.closest("[data-module-check]");
  if (!checkbox) return;
  saveState({ completed: { [checkbox.dataset.moduleCheck]: checkbox.checked } });
  renderTracks();
});

timerButton.addEventListener("click", () => {
  if (stopTimer()) showToast("Study timer paused.");
});

lessonPrevious.addEventListener("click", () => moveLesson(-1));
lessonNext.addEventListener("click", () => moveLesson(1));
document.querySelector("[data-close-lesson]").addEventListener("click", () => lessonDialog.close());
lessonDialog.addEventListener("click", event => {
  if (event.target === lessonDialog) lessonDialog.close();
});
lessonContent.addEventListener("change", event => {
  const selected = event.target.closest('input[name="inline-answer"]');
  if (!selected || !inlineCheckSession || inlineCheckSession.answered) return;
  inlineCheckSession.selected = Number(selected.value);
  const checkButton = lessonContent.querySelector('[data-inline-action="check"]');
  if (checkButton) checkButton.disabled = false;
});
lessonContent.addEventListener("click", event => {
  const animationButton = event.target.closest("[data-animation-toggle]");
  if (animationButton) {
    const figure = animationButton.closest(".lesson-visual");
    const enabled = figure.dataset.playing !== "true";
    if (saveState({ preferences: { diagramMotion: enabled } })) updateDiagramMotion(figure, enabled);
    return;
  }
  const button = event.target.closest("[data-inline-action]");
  if (button) handleInlineAction(button.dataset.inlineAction);
});

reducedMotion.addEventListener("change", () => {
  const figure = lessonContent.querySelector(".lesson-visual");
  if (figure && state.preferences.diagramMotion === null) updateDiagramMotion(figure, diagramMotionEnabled());
});

document.querySelector("[data-close-assessment]").addEventListener("click", () => assessmentDialog.close());
assessmentDialog.addEventListener("click", event => {
  if (event.target === assessmentDialog) assessmentDialog.close();
});

themeButton.addEventListener("click", () => {
  if (!syncSavedState()) return;
  if (!saveState({ preferences: { theme: state.preferences.theme === "dark" ? "light" : "dark" } })) return;
  applyPreferences();
});

settingsButton.addEventListener("click", () => {
  applyPreferences();
  settingsDialog.showModal();
});

settingsForm.addEventListener("submit", event => {
  event.preventDefault();
  const values = new FormData(settingsForm);
  const saved = saveState({ preferences: {
    weeklyHours: Number(values.get("weeklyHours")),
    readingSize: values.get("readingSize"),
    accent: values.get("accent")
  } });
  applyPreferences();
  settingsDialog.close();
  if (saved) showToast("Your learning space is ready.");
});

document.querySelectorAll("[data-close-settings]").forEach(button => {
  button.addEventListener("click", () => settingsDialog.close());
});
settingsDialog.addEventListener("click", event => {
  if (event.target === settingsDialog) settingsDialog.close();
});

assessmentBody.addEventListener("change", event => {
  const selected = event.target.closest('input[name="assessment-answer"]');
  if (!selected || quizSession.submitted) return;
  quizSession.selected = Number(selected.value);
  const submitButton = assessmentBody.querySelector('[data-quiz-action="submit"]');
  if (submitButton) submitButton.disabled = false;
});

assessmentBody.addEventListener("click", event => {
  const button = event.target.closest("[data-quiz-action]");
  if (!button || !quizSession) return;

  if (button.dataset.quizAction === "submit" && quizSession.selected !== null) {
    const question = quizSession.questions[quizSession.index];
    if (quizSession.selected === question[2]) quizSession.score += 1;
    quizSession.submitted = true;
    renderAssessment();
  } else if (button.dataset.quizAction === "next") {
    if (quizSession.index === quizSession.questions.length - 1) {
      finishAssessment();
    } else {
      quizSession.index += 1;
      quizSession.selected = null;
      quizSession.submitted = false;
      renderAssessment();
    }
  } else if (button.dataset.quizAction === "retry") {
    const moduleId = quizSession.moduleId;
    quizSession = { moduleId, questions: assessmentQuestions(moduleId), index: 0, selected: null, submitted: false, score: 0, complete: false };
    renderAssessment();
  } else if (button.dataset.quizAction === "close") {
    assessmentDialog.close();
  }
});

document.getElementById("share-button").addEventListener("click", async () => {
  if (window.location.protocol === "file:") {
    showToast("Publish this site online before sharing its link.");
    return;
  }
  const shareData = { title: document.title, text: "Explore Pragyavyn: hands-on AI engineering lessons, labs and projects by Naveen Narasapuram.", url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Academy link copied. Share it with a friend!");
    } else {
      window.prompt("Copy this link to share the academy:", window.location.href);
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error("Could not share the academy.", error);
      showToast("Sharing isn't available here. Copy the page address to share.");
    }
  }
});

function updateBackToTopButton() {
  backToTopButton.classList.toggle("visible", window.scrollY > 420);
}

window.addEventListener("scroll", updateBackToTopButton, { passive: true });
backToTopButton.addEventListener("click", () => {
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top: 0, behavior });
});

applyPreferences();
renderCareerPaths();
renderFilters();
renderTracks();
updateBackToTopButton();
setInterval(updateTimer, 1000);
if (storageIssue) showStorageWarning();

document.getElementById("storage-download").addEventListener("click", () => {
  try {
    const backup = {};
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key === STORAGE_KEY || (key && key.startsWith(STORAGE_PREFIX))) backup[key] = localStorage.getItem(key);
    }
    const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "academy-progress-backup.json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    console.error("Could not export saved progress.", error);
    showToast("The saved data could not be downloaded.");
  }
});

document.getElementById("storage-reset").addEventListener("click", () => {
  if (!storageIssue || !storageIssue.key) {
    showToast("No damaged record was identified. Check browser storage permissions.");
    return;
  }
  if (!window.confirm("Remove the unreadable record? Download a backup first. Other progress records will be kept.")) return;
  try {
    localStorage.removeItem(storageIssue.key);
    window.location.reload();
  } catch (error) {
    console.error("Could not remove the unreadable record.", error);
    showToast("The damaged record could not be removed.");
  }
});

window.addEventListener("storage", event => {
  if (event.key !== null && event.key !== STORAGE_KEY && !event.key.startsWith(STORAGE_PREFIX)) return;
  if (!syncSavedState()) return;
  document.getElementById("storage-warning").hidden = true;
  if (!settingsDialog.open) applyPreferences();
  renderCareerPaths();
  renderFilters();
  renderTracks();
  if (lessonDialog.open && !modulesForPath().some(module => module.id === allModules[currentLessonIndex].id)) {
    lessonDialog.close();
    showToast("The selected path changed in another tab.");
  }
});
