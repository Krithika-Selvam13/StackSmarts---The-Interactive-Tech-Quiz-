# LogicLoop — Interactive Quiz Platform

LogicLoop is a modern, responsive web application designed to evaluate and sharpen frontend fundamentals across **Git, GitHub, HTML, and CSS**. Built with clean semantic HTML5, pure CSS3 Flexbox layouts, and modular Vanilla JavaScript.

---

## ✨ Key Features

- **Category Filtering & Diagnostic Mode:** Test individual domains (Git, GitHub, HTML, CSS — 5 questions each) or launch a full 20-question randomized diagnostic.
- **Fisher-Yates Question Shuffling:** Questions are dynamically randomized upon starting without mutating the original question bank.
- **Immediate Pedagogical Feedback:** Interactive explanations immediately display following each submission to clarify foundational concepts.
- **Lockout Mechanism:** Once a choice is selected, buttons are disabled to prevent double-submitting or score manipulation.
- **Progress Tracking:** Real-time visual progress bar and score updates.
- **Score Persistence:** Uses `localStorage` to preserve the user's best score across browser sessions.
- **Mobile-First Responsive Layout:** Flexbox-driven interface that adapts between mobile, tablet, and widescreen viewports without horizontal clipping.

---

## 🛠️ Built With

- **HTML5:** Semantic architecture (`<main>`, `<section>`, `<header>`, `<footer>`).
- **CSS3:** Flexbox layout system, CSS custom properties, and smooth CSS transitions.
- **Vanilla JavaScript (ES6+):** Pure DOM manipulation, array filtering/shuffling, event delegation, and `localStorage` API.
- **Git & GitHub:** Version control, atomic feature branch workflows, and deployment via GitHub Pages.

---

## 📂 File Architecture

```text
logicloop-quiz-platform/
├── index.html        # App layout, viewports, and semantic structures
├── style.css         # Custom property palette, Flexbox layouts, and media queries
├── script.js         # Question bank, array manipulation, state, and DOM logic
├── README.md         # Comprehensive project documentation
└── assets/           # Media and branding assets
```
