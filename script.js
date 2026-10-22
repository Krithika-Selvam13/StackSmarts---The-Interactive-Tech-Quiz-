/* ==========================================================================
   LogicLoop — Interactive Quiz Platform Engine
   ========================================================================== */

/**
 * Question Bank: 20 Multiple-Choice Questions
 * Zero-based index used for answer: 0 = A, 1 = B, 2 = C, 3 = D.
 */
const questions = [
  // --- GIT (Questions 1 - 5) ---
  {
    id: 1,
    category: "Git",
    difficulty: "Easy",
    question: "What is Git primarily used for?",
    options: [
      "Designing web pages",
      "Version control",
      "Managing databases",
      "Creating animations"
    ],
    answer: 1,
    explanation: "Git is a version control system that tracks changes in files and helps developers collaborate."
  },
  {
    id: 2,
    category: "Git",
    difficulty: "Easy",
    question: "Which command initializes a new Git repository?",
    options: [
      "git start",
      "git create",
      "git init",
      "git new"
    ],
    answer: 2,
    explanation: "git init initializes a new Git repository in the current directory."
  },
  {
    id: 3,
    category: "Git",
    difficulty: "Easy",
    question: "Which command stages changes for the next commit?",
    options: [
      "git push",
      "git add",
      "git status",
      "git log"
    ],
    answer: 1,
    explanation: "git add stages selected file changes so they can be included in a commit."
  },
  {
    id: 4,
    category: "Git",
    difficulty: "Medium",
    question: "What does a Git commit represent?",
    options: [
      "A saved snapshot of staged changes",
      "A file uploaded to a website",
      "A deleted repository",
      "A new programming language"
    ],
    answer: 0,
    explanation: "A commit records a snapshot of the repository's staged changes along with metadata."
  },
  {
    id: 5,
    category: "Git",
    difficulty: "Medium",
    question: "Which command creates and switches to a new branch?",
    options: [
      "git branch --delete feature",
      "git switch main",
      "git switch -c feature",
      "git status feature"
    ],
    answer: 2,
    explanation: "git switch -c feature creates a branch named 'feature' and switches to it."
  },

  // --- GITHUB (Questions 6 - 10) ---
  {
    id: 6,
    category: "GitHub",
    difficulty: "Easy",
    question: "What is GitHub?",
    options: [
      "A CSS framework",
      "A platform for hosting Git repositories and collaboration",
      "A programming language",
      "A text editor only"
    ],
    answer: 1,
    explanation: "GitHub hosts Git repositories and provides tools for collaboration, code review, and project management."
  },
  {
    id: 7,
    category: "GitHub",
    difficulty: "Easy",
    question: "What is a repository on GitHub?",
    options: [
      "A collection of project files and their version history",
      "A CSS selector",
      "A browser extension",
      "A computer's RAM"
    ],
    answer: 0,
    explanation: "A repository contains project files and, for a Git repository, its version history."
  },
  {
    id: 8,
    category: "GitHub",
    difficulty: "Easy",
    question: "Which Git command sends local commits to a remote repository?",
    options: [
      "git pull",
      "git init",
      "git push",
      "git diff"
    ],
    answer: 2,
    explanation: "git push sends local commits to a remote repository, such as one hosted on GitHub."
  },
  {
    id: 9,
    category: "GitHub",
    difficulty: "Medium",
    question: "What is the main purpose of a pull request?",
    options: [
      "To delete a local branch automatically",
      "To propose and review changes before merging them",
      "To install Git",
      "To change HTML into CSS"
    ],
    answer: 1,
    explanation: "A pull request lets collaborators discuss and review proposed changes before merging them into another branch."
  },
  {
    id: 10,
    category: "GitHub",
    difficulty: "Easy",
    question: "What is GitHub Pages commonly used for?",
    options: [
      "Hosting static websites",
      "Running a local database server",
      "Editing operating system files",
      "Replacing Git commits"
    ],
    answer: 0,
    explanation: "GitHub Pages can publish static websites made with HTML, CSS, and JavaScript."
  },

  // --- HTML (Questions 11 - 15) ---
  {
    id: 11,
    category: "HTML",
    difficulty: "Easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markdown Language"
    ],
    answer: 1,
    explanation: "HTML stands for HyperText Markup Language and defines the structure of web pages."
  },
  {
    id: 12,
    category: "HTML",
    difficulty: "Easy",
    question: "Which tag creates a hyperlink?",
    options: [
      "img",
      "p",
      "a",
      "h1"
    ],
    answer: 2,
    explanation: "The <a> element creates a hyperlink. Its href attribute specifies the destination."
  },
  {
    id: 13,
    category: "HTML",
    difficulty: "Easy",
    question: "Which attribute specifies alternative text for an image?",
    options: [
      "src",
      "href",
      "title",
      "alt"
    ],
    answer: 3,
    explanation: "The alt attribute provides a text alternative for an image, which is useful for accessibility and when an image cannot be displayed."
  },
  {
    id: 14,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is most appropriate for the main content of a page?",
    options: [
      "footer",
      "main",
      "aside",
      "head"
    ],
    answer: 1,
    explanation: "The <main> element represents the dominant content of the document's body."
  },
  {
    id: 15,
    category: "HTML",
    difficulty: "Medium",
    question: "Which attribute connects a <label> to a form input by its ID?",
    options: [
      "name",
      "value",
      "for",
      "action"
    ],
    answer: 2,
    explanation: "The label's for attribute should match the input element's id, improving form accessibility."
  },

  // --- CSS (Questions 16 - 20) ---
  {
    id: 16,
    category: "CSS",
    difficulty: "Easy",
    question: "What does CSS stand for?",
    options: [
      "Creative Style Syntax",
      "Computer Styled Sections",
      "Cascading Style Sheets",
      "Colorful Styling System"
    ],
    answer: 2,
    explanation: "CSS stands for Cascading Style Sheets and controls the presentation of HTML elements."
  },
  {
    id: 17,
    category: "CSS",
    difficulty: "Easy",
    question: "Which CSS property changes the text color?",
    options: [
      "font-style",
      "background-color",
      "text-align",
      "color"
    ],
    answer: 3,
    explanation: "The color property sets the foreground color of an element's text."
  },
  {
    id: 18,
    category: "CSS",
    difficulty: "Easy",
    question: "Which declaration makes an element a flex container?",
    options: [
      "position: flex;",
      "display: flex;",
      "flex-direction: container;",
      "align-items: flex;"
    ],
    answer: 1,
    explanation: "display: flex establishes a flex formatting context for an element's direct children."
  },
  {
    id: 19,
    category: "CSS",
    difficulty: "Medium",
    question: "In a flex container with flex-direction: row, what does justify-content control?",
    options: [
      "Alignment along the main axis",
      "The font size of the children",
      "The border thickness",
      "Alignment only along the cross axis"
    ],
    answer: 0,
    explanation: "With flex-direction: row, the main axis is horizontal in the usual writing mode, so justify-content aligns or distributes items along that axis."
  },
  {
    id: 20,
    category: "CSS",
    difficulty: "Easy",
    question: "Which selector targets elements with class=\"card\"?",
    options: [
      "#card",
      "card",
      ".card",
      "*card"
    ],
    answer: 2,
    explanation: "A dot followed by a class name selects elements with that class. The # symbol selects an ID."
  }
];

/* ==========================================================================
   State Management
   ========================================================================== */
let activeCategory = "all";
let activeQuestionQueue = [];
let currentQuestionIndex = 0;
let userScore = 0;
let incorrectCount = 0;
let isAnswerSubmitted = false;

/* ==========================================================================
   DOM Element Selectors
   ========================================================================== */
// Screens
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// Category Cards & Navigation
const categoryCards = document.querySelectorAll(".category-card");
const startBtn = document.getElementById("start-btn");
const navBestScore = document.getElementById("nav-best-score");

// Quiz Interface
const quizCategoryTag = document.getElementById("quiz-category-tag");
const questionTracker = document.getElementById("question-tracker");
const liveScore = document.getElementById("live-score");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionDifficulty = document.getElementById("question-difficulty");
const questionPrompt = document.getElementById("question-prompt");
const optionsContainer = document.getElementById("options-container");

// Feedback Panel
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackHeading = document.getElementById("feedback-heading");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

// Results Screen
const resultPercentage = document.getElementById("result-percentage");
const resultHeadline = document.getElementById("result-headline");
const resultSummary = document.getElementById("result-summary");
const countCorrect = document.getElementById("count-correct");
const countIncorrect = document.getElementById("count-incorrect");
const countBest = document.getElementById("count-best");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");

/* ==========================================================================
   Storage & Best Score Logic
   ========================================================================== */
function loadBestScore() {
  const savedScore = localStorage.getItem("logicloop_best_score") || 0;
  navBestScore.textContent = savedScore;
  countBest.textContent = savedScore;
}

function updateBestScore(newScore) {
  const currentBest = parseInt(localStorage.getItem("logicloop_best_score") || "0", 10);
  if (newScore > currentBest) {
    localStorage.setItem("logicloop_best_score", newScore);
  }
  loadBestScore();
}

/* ==========================================================================
   Utility: Shuffle Function (Fisher-Yates)
   ========================================================================== */
function shuffleArray(sourceArray) {
  const arrayCopy = [...sourceArray];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

/* ==========================================================================
   Screen Transition Helper
   ========================================================================== */
function showScreen(screenToShow) {
  [welcomeScreen, quizScreen, resultScreen].forEach(screen => {
    screen.classList.remove("active");
  });
  screenToShow.classList.add("active");
}

/* ==========================================================================
   Category Selection Handling
   ========================================================================== */
categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    categoryCards.forEach(c => c.classList.remove("active-choice"));
    card.classList.add("active-choice");
    activeCategory = card.getAttribute("data-category");
  });
});

/* ==========================================================================
   Quiz Execution Engine
   ========================================================================== */
function startQuiz() {
  // 1. Filter questions based on chosen category without mutating global questions
  let filtered = [];
  if (activeCategory === "all") {
    filtered = [...questions];
  } else {
    filtered = questions.filter(q => q.category.toLowerCase() === activeCategory.toLowerCase());
  }

  // 2. Shuffle selected questions
  activeQuestionQueue = shuffleArray(filtered);

  // 3. Reset runtime state
  currentQuestionIndex = 0;
  userScore = 0;
  incorrectCount = 0;
  liveScore.textContent = "0";

  // 4. Switch View & Render First Question
  showScreen(quizScreen);
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  isAnswerSubmitted = false;
  feedbackPanel.classList.add("hidden");
  feedbackPanel.classList.remove("correct-theme", "incorrect-theme");

  const currentQ = activeQuestionQueue[currentQuestionIndex];
  const total = activeQuestionQueue.length;

  // Update Meta Trackers
  quizCategoryTag.textContent = currentQ.category;
  questionTracker.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
  questionDifficulty.textContent = currentQ.difficulty;
  questionPrompt.textContent = currentQ.question;

  // Update Progress Bar
  const progressPercent = ((currentQuestionIndex) / total) * 100;
  progressBarFill.style.width = `${progressPercent}%`;

  // Render Clickable Options
  optionsContainer.innerHTML = "";
  const indexLetters = ["A", "B", "C", "D"];

  currentQ.options.forEach((optText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.innerHTML = `
      <span class="option-index">${indexLetters[index]}</span>
      <span class="option-text">${optText}</span>
    `;

    button.addEventListener("click", () => handleAnswerSelection(index, button));
    optionsContainer.appendChild(button);
  });
}

function handleAnswerSelection(selectedIndex, clickedButton) {
  if (isAnswerSubmitted) return; // Prevent multiple clicks
  isAnswerSubmitted = true;

  const currentQ = activeQuestionQueue[currentQuestionIndex];
  const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");

  // Disable all options
  allOptionButtons.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === currentQ.answer;

  if (isCorrect) {
    userScore++;
    liveScore.textContent = userScore;
    clickedButton.classList.add("correct");
    showFeedback(true, currentQ.explanation);
  } else {
    incorrectCount++;
    clickedButton.classList.add("incorrect");
    // Visually highlight the correct answer so user learns
    allOptionButtons[currentQ.answer].classList.add("correct");
    showFeedback(false, currentQ.explanation);
  }
}

function showFeedback(isCorrect, explanation) {
  feedbackPanel.classList.remove("hidden");
  if (isCorrect) {
    feedbackPanel.classList.add("correct-theme");
    feedbackIcon.textContent = "✓";
    feedbackHeading.textContent = "Correct Answer!";
    feedbackHeading.style.color = "var(--state-success)";
  } else {
    feedbackPanel.classList.add("incorrect-theme");
    feedbackIcon.textContent = "✕";
    feedbackHeading.textContent = "Incorrect";
    feedbackHeading.style.color = "var(--state-error)";
  }

  explanationText.textContent = explanation;

  // Change button label on the final question
  if (currentQuestionIndex === activeQuestionQueue.length - 1) {
    nextBtn.textContent = "View Final Results ➔";
  } else {
    nextBtn.textContent = "Next Question ➔";
  }
}

function proceedToNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < activeQuestionQueue.length) {
    renderCurrentQuestion();
  } else {
    concludeQuiz();
  }
}

function concludeQuiz() {
  // Fill progress bar to 100%
  progressBarFill.style.width = "100%";

  const total = activeQuestionQueue.length;
  const percentage = Math.round((userScore / total) * 100);

  resultPercentage.textContent = `${percentage}%`;
  resultSummary.textContent = `You scored ${userScore} out of ${total} questions correctly.`;
  countCorrect.textContent = userScore;
  countIncorrect.textContent = incorrectCount;

  // Headline feedback based on percentage
  if (percentage >= 80) {
    resultHeadline.textContent = "Outstanding Performance!";
  } else if (percentage >= 50) {
    resultHeadline.textContent = "Good Effort!";
  } else {
    resultHeadline.textContent = "Keep Practicing!";
  }

  // Update best score and persist in localStorage
  updateBestScore(userScore);

  showScreen(resultScreen);
}

/* ==========================================================================
   Global Event Listeners
   ========================================================================== */
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", proceedToNext);

restartBtn.addEventListener("click", () => {
  startQuiz();
});

homeBtn.addEventListener("click", () => {
  showScreen(welcomeScreen);
});

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadBestScore();
});