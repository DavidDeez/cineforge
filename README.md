# ðŸŽ¬ CINEFORGE AI WEB APP

**Agentic Cinema Hackathon Submission**

Welcome to **CineForge AI Web App**! This repository contains the front-end Web App interface generated autonomously by our AI workflow.

## ðŸš€ What it does
When movie studios need a promotional campaign, they usually spend weeks hiring web developers. Our **CineForge AI** agent completely automates this. You simply paste a movie script into the web app, and the AI autonomously engineers, designs, and deploys a custom promotional campaign site.

## ðŸ› ï¸ The Tech Stack
* **Front-end:** Pure HTML/CSS/JS (Premium Dark-Mode SPA)
* **Back-end Orchestration:** Python & LangChain (Local Agent)
* **AI Engine:** Google Cloud Vertex AI (Gemma 2) 
* **Deployment Pipeline:** PyGithub API -> Render Static Sites

## ðŸ’¡ How we built it
We engineered a local Python CLI agent that parses scripts and uses Google Cloud Vertex AI (Gemma 2) to generate the UI assets. To ensure a seamless 1-click deployment, we built a robust deployment bridge that autonomously provisions a public GitHub repository, injects a `render.yaml` Infrastructure-as-Code file, and triggers an instant Render deployment.

---
*Built with â¤ï¸ for the Agentic Cinema Hackathon.*
