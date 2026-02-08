Mara Central 2026 🚀

Welcome to the digital brain of Chris! This is the rebuild of Mara Central, designed to be the ultimate hub for daily web development mastery. We're talking HTML, CSS, JS, and eventually the heavy hitters like PHP and MySQL.

🧐 What's the Crack?

This project is a React-based single-page application (SPA) powered by Vite. It's serving as both a portfolio and a learning platform where we track progress through various coding modules. Think of it as a custom-built LMS (Learning Management System), but cooler because we built it ourselves.

✅ Completed Features (So Far)

Architecture: Vite + React setup with Tailwind CSS for that crisp, modern look.

Routing: Full react-router-dom integration. We've got dynamic routing working for the lessons (/lessons/:slug), so we don't have to build a billion separate pages. Smart, not hard.

Data Structure: A local "database" (src/data/learningPath.js) managing our curriculum. No heavy backend yet, just keeping it nimble.

Components:

ModuleCard: Reusable cards for the dashboard.

ModuleDetail: A dynamic "Classroom" template that adapts based on the URL (HTML, CSS, etc.).

Standard layout bits (Header, Footer, Nav).

Pages: Home, About, Contact, and the 404 page for when things go pear-shaped.

📝 The Roadmap (What's Next)

We're taking this one step at a time, but here's the grand plan:

Projects Dashboard: Need to build the /projects page to show off the real-world stuff (Hilltop Welding, Kitchen Kombat, etc.). currently, that link goes nowhere.

Lesson Viewer: Right now, clicking a lesson in the curriculum list does diddly-squat. We need a view to actually read the content.

Content Population: Replace the placeholder "Lorem Ipsum" junk with actual study notes and code snippets.

Backend Integration: Eventually, we'll swap the static JS data files for a proper PHP/MySQL backend on DreamHost to match your certification goals.

Interactive Elements: Maybe throw in some code highlighting or simple quizzes to keep the brain sharp.

🛠️ Tech Stack

Core: React 18

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM

Icons: Heroicons / SVGs

🏃‍♂️ How to Run This Beast

Clone it: git clone <repo-url>

Install deps: npm install

Fire it up: npm run dev

Open it: usually http://localhost:5173

Maintained by Chris & Emma. Don't break it. 😉
