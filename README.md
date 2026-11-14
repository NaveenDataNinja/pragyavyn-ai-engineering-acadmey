# Pragyavyn

Pragyavyn is a hands-on AI engineering academy by Naveen Narasapuram. It is a no-build learning application with a shared foundation and selectable AI Engineer, Machine Learning Engineer and Generative AI Engineer paths. The original roadmap remains separate. Switching paths preserves completion of shared modules in this academy's browser storage.

The curriculum includes guided lessons, fictional workplace scenarios, mentor-style reasoning, AI connections, recall questions and assessments. It covers topics including supervised learning, Bayes and entropy, clustering, reinforcement learning, transformers, model selection, vector search, RAG, evaluation, chatbots, agentic workflows, MCP concepts and MLOps practices. MCP and agent exercises are design exercises, not a running MCP server or deployed agent. The AI and GenAI paths include these lessons; the routes share many modules. They are curated starting points, not an exhaustive curriculum or a substitute for professional employment experience.

## Run

Open `index.html` in a current desktop or mobile browser. No installation or account is required for the website. Alternatively, with Python 3 installed, run `python -m http.server 8000` in this folder and open `http://localhost:8000`. Google Fonts are optional; local fonts are used when unavailable. Progress, assessment results and preferences stay in the current browser and are not synchronized with other devices. Browser storage for a local file, local server and published website can be separate.

Completion, assessment results and preferences are stored as separate browser-local records, alongside any older saved progress. Open tabs update when another tab changes progress; concurrent edits to the same record, including the timer, use the last saved value. Clearing browser data can remove progress. If saved data cannot be read, the roadmap warns you and offers a raw-data backup before removing the identified damaged record. This is not a full export and restore feature.

Each lesson's quick check has three shuffled questions and shuffled answers. Two correct answers are needed to pass; earlier passing results are retained. The check is practice, not a certification.

Choose a career path to filter the roadmap and calculate route-specific hours and progress. Hover over or focus the glass-style **Explore all roles** hub to reveal the paths on desktop; the paths remain visible on touch and smaller screens. Reduced-motion settings remove the transition. Choose the hub to browse the full curriculum. The first six tracks are shared; later modules show the roles for which they are recommended. The violet appearance defaults to the Plum accent; choose Sage or Ocean in **Personalize** if preferred. Existing saved accent choices are preserved.

Lessons include illustrated walkthroughs of fictional scenarios. The embeddings lesson also shows a hand-picked two-dimensional comparison and explains how an encoder and cosine similarity fit together. Where appropriate, examples name a possible model or algorithm; these are suggestions, not models running in the site. Use **Animate diagram** to pause or play the illustrations; your choice is saved in this browser. Animation is initially paused when the operating system requests reduced motion. The static diagrams and explanations remain available.

## Practice

- Explore the five guided project starters on the home page: a Python study planner, a SQLite dataset, an ML baseline, a grounded notes retrieval prototype and a portfolio write-up. Each includes steps, checks and a starter example. These are assignments to build locally, not completed applications or code executed by the website; the ML example needs scikit-learn installed separately.
- Open `labs.html` or select **Open browser retrieval lab** for an offline word-count similarity exercise. It does not call a model or external service.
- Open `practice.html` or follow [the practice guide](practice/README.md) to run a Python standard-library retrieval project and its tests locally. It uses fictional data. It is not a vector database, chatbot or complete RAG system.
- Open `mentor-project.html` for a mentor-led fictional workplace assistant using Ollama embeddings and generation. Its setup guide links to official Windows, macOS and Linux installation instructions, local-service checks, model downloads and troubleshooting. It needs Python, Ollama and separately downloaded local models; it ranks vectors in memory and is not production-ready. No model is run by the static website itself; its Python tests use a mock Ollama service and do not verify a real-model run.
- Some lessons describe optional real-world tools or model downloads. These may require separate installations, accounts, licenses, hardware or network access; they are not included or executed by this site.

The learner should validate claims and build their own projects. Real MCP integrations, broader role-specific projects, production authorization, automated evidence checks, deployment and operational monitoring remain outside the included projects. Examples and simulations alone cannot guarantee employment or the ability to solve every real-world problem.

## Test

With Python 3 installed, run from this folder:

```text
python -m unittest discover -s practice -p "test_*.py"
```

The Ollama tests use a mock service; running a real model requires the separate setup described on the project page.

## Publish with GitHub Pages

1. Review the files and branding, then create a GitHub repository and push this folder's contents to its default branch.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select the default branch and the root (`/`) folder, and save.
3. Wait for the deployment to finish and open the URL shown in Pages settings. Check the home page and the lab and project links.

Keep the HTML pages, JavaScript files, `styles.css`, `pragyavyn-mark.svg` and `practice` folder together. GitHub Pages serves static files; the Python projects must be downloaded and run locally. No license is included yet; the repository owner should choose one before inviting reuse.
