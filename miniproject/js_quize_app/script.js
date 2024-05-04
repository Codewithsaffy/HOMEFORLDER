const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: false },
      { text: "Elephant", correct: false },
      { text: "Girffae", correct: false },
    ],
  },
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },

  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Oganesson", correct: false },
    ],
  },

  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.querySelector("#nextButton");
let currentQuestionIndex = 0;
let score = 0;
function startQuize() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currenQusetion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = questionNo+ ". "+ currenQusetion.question;

  currenQusetion.answers.forEach((answers) => {
    let button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn")
    answerButton.append(button)
})
  }
  function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }
  }
startQuize()