const quizData = [
    {
      question: "Which of the following is used to style the presentation of a web page?",
      answers: ["HTML", "CSS", "Javascript", "Php"],
      correct: 1
    },
    {
        question: "Which of the following tags is used to create a numbered list in HTML?",
        answers: ["<ul>","<li>", "<ol>", "<list>"],
        correct: 2
    }
    ,
    {
        question: "Which of the following methods can be used to convert a string into an integer in JavaScript?",
        answers: ["parserFloat()", "Number()", "toString()","parseInt()"],
        correct: 3
    }
    ,
    {
      question: "In React, which lifecycle method is used to perform actions immediately after a component is mounted and rendered?",
      answers: ["componentDidMount()","componentWillUnmount()", "componentDidUpdate()", "componentWillMount()"],
      correct: 0
    }
    ,
    {
        question: "Which of the following methods is used to update the state of a React component?",
        answers: ["changeState()","updateState()","setState()","modifyState()"],
        correct: 2
      }
      
    // Add more questions here
  ];
  
 // export default quizData;
  

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  const questionText = document.getElementById('question-text');
  questionText.innerText = currentQuestion.question;

  const answerButtons = document.querySelectorAll('.answer');
  answerButtons.forEach((button, index) => {
    button.innerText = currentQuestion.answers[index];
    button.classList.remove('correct-answer', 'incorrect-answer');
    button.onclick = () => checkAnswer(index);
  });
}

function checkAnswer(selectedAnswerIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  const answerButtons = document.querySelectorAll('.answer');

  if (selectedAnswerIndex === currentQuestion.correct) {
    answerButtons[selectedAnswerIndex].classList.add('correct-answer');
    score++;
  } else {
    answerButtons[selectedAnswerIndex].classList.add('incorrect-answer');
    answerButtons[currentQuestion.correct].classList.add('correct-answer');
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `
    <h2>You answered ${score} out of ${quizData.length} questions correctly!</h2>`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
});
