//Data
const questions = [
  {
    question: "What does 'DOM' stand for in JavaScript?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Document Order Model", correct: false },
      { text: "Dynamic Object Method", correct: false },
    ],
  },
  {
    question:
      "Which keyword is used to declare a constant variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "int", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
    ],
  },

  {
    question: "What is the result of 2 + '2' in JavaScript?",
    answers: [
      { text: "4", correct: false },
      { text: "22", correct: true },
      { text: "Error", correct: false },
      { text: "Undefined", correct: false },
    ],
  },
  {
    question:
      "Which method is used to add elements to the end of an array in JavaScript?",
    answers: [
      { text: "push()", correct: true },
      { text: "append()", correct: false },
      { text: "addToEnd()", correct: false },
      { text: "insert()", correct: false },
    ],
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "Number and Null", correct: false },
      { text: "Negative Absolute Number", correct: false },
      { text: "No Action Needed", correct: false },
    ],
  },
  {
    question: "Which built-in object in JavaScript represents a date and time?",
    answers: [
      { text: "Math", correct: false },
      { text: "Time", correct: false },
      { text: "Date", correct: true },
      { text: "Clock", correct: false },
    ],
  },
  {
    question: "What is the result of '5' == 5 in JavaScript?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "Error", correct: false },
      { text: "Undefined", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript function is used to round a number to the nearest integer?",
    answers: [
      { text: "round()", correct: true },
      { text: "ceil()", correct: false },
      { text: "floor()", correct: false },
      { text: "truncate()", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the 'console.log()' function in JavaScript?",
    answers: [
      { text: "Display a pop-up alert", correct: false },
      { text: "Print output to the console", correct: true },
      { text: "Execute a function", correct: false },
      { text: "Create a new variable", correct: false },
    ],
  },
  {
    question:
      "Which statement is used to exit a loop prematurely in JavaScript?",
    answers: [
      { text: "break", correct: true },
      { text: "continue", correct: false },
      { text: "return", correct: false },
      { text: "exit", correct: false },
    ],
  },
];

// Variables
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//Store Index and Score
let currentQuestionIndex = 0;
let score = 0;

// Functions
// StartQuiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Show Question
function showQuestion() {
  //Reset State
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNumber} . ${currentQuestion.question}`;

  //display answers: loop from answers from object
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    // add event listener to button
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// Reset State
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Select Answer Function
function selectAnswer(e) {
  const selectedBtn = e.target;
  // Check if the answer is correct and highlight it in green
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Disable and highlight correct answers
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  // Show again the Next button, after select answer
  nextButton.style.display = "block";
}

// Show Score Function
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
// Function HandleNextButton
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
