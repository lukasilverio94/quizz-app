//Data
const questions = [
  {
    question: "What is JavaScript used for?",
    answers: [
      { text: "Styling web pages", correct: false },
      {
        text: "Creating and controlling dynamic website content",
        correct: true,
      },
      { text: "Managing server-side databases", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
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
  {
    question:
      "What is the purpose of the addEventListener method in JavaScript?",
    answers: [
      { text: "It adds an element to the web page.", correct: false },
      { text: "It creates a new event in JavaScript.", correct: false },
      { text: "It attaches an event handler to an element.", correct: true },
      { text: "It removes an element from the web page.", correct: false },
    ],
  },
  {
    question: "How do you check the type of a variable in JavaScript?",
    answers: [
      { text: "typeof variableName", correct: true },
      { text: "checkType(variableName)", correct: false },
      { text: "variableName.type()", correct: false },
      { text: "variableName.getType()", correct: false },
    ],
  },
  {
    question: "What is a closure in JavaScript?",
    answers: [
      {
        text: "A built-in JavaScript function for closing browser tabs.",
        correct: false,
      },
      { text: "A way to hide sensitive data in your code.", correct: false },
      {
        text: "A function that remembers the environment in which it was created, even after that environment is no longer available.",
        correct: true,
      },
      {
        text: "A method for opening and closing pop-up windows in web browsers.",
        correct: false,
      },
    ],
  },
  {
    question: "Explain the concept of 'callback functions' in JavaScript.",
    answers: [
      {
        text: "Functions that are called automatically when a script is loaded.",
        correct: false,
      },
      {
        text: "Functions used to display alerts in the browser.",
        correct: false,
      },
      {
        text: "Functions passed as arguments to other functions and executed after a specific event or asynchronous operation.",
        correct: true,
      },
      {
        text: "Functions that return another function as their result.",
        correct: false,
      },
    ],
  },
];

// Variables
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
var allCorrect = " ";
//Store Index and Score
let currentQuestionIndex = 0;
let score = 0;

// StartQuiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  allCorrect.innerText = " ";
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
function handleNextButton(currentQuestion) {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } // IF IS ALL CORRECT
  else if (score === questions.length) {
    // const allCorrect = document.createElement("div");
    allCorrect = document.createElement("div");
    allCorrect.classList.add("all-correct");
    allCorrect.innerText = `Congratulations, you scored like a Pro 🎉✨!`;
    const parentContainer = document.querySelector(".quiz");
    parentContainer.insertBefore(
      allCorrect,
      parentContainer.querySelector("button").parentElement
    );
    showScore();
    nextButton.innerHTML = "Play Again";
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
