const questions = [
  {
    question: "What is the capital of Australia:",
    answer: "Canberra",
  },
  {
    question: "What is the largest mammal?",
    answer: "Blue Whale",
  },
  {
    question: "What is the name of the little mermaid in the Disney movie?",
    answer: "Ariel",
  },
  {
    question: "What is the national animal of Nepal?",
    answer: "Cow",
  },
  {
    question: "In which year did the Titanic sink?",
    answer: "1912",
  }
];

let questionIndex = 0;
let quizScore = 0;

function displayQuestion() {
  const question = questions[questionIndex];
  let questionHTML = `<h2> ${question.question}</h2>`;
document.getElementById("questionContainer").innerHTML = questionHTML;
}

function nextQuestion() {
  const selectedAnswer = document.getElementById("answerInput").value;

if(!selectedAnswer) {
  alert("Please enter an answer.");
  return;
}
  
if(selectedAnswer.trim().toLowerCase() === questions[questionIndex].answer.toLowerCase()) {
  quizScore++
}

questionIndex++;

if(questionIndex < questions.length) {
  displayQuestion();
  document.getElementById("answerInput").value = "";
}
else {
  if(quizScore === 1 || quizScore === 2) {
    document.getElementById("result").innerHTML = `Your score is <strong>${quizScore}/${questions.length}</strong>. Try again!`;
  }
  else if(quizScore === 3 || quizScore === 4) {
    document.getElementById("result").innerHTML = `Your score is <strong>${quizScore}/${questions.length}</strong>. Good Job!`;
  }
  else if(quizScore === 5){
    document.getElementById("result").innerHTML = `Your score is <strong>${quizScore}/${questions.length}</strong>. Congratulations!`;
  }
  else {
    document.getElementById("result").innerHTML = `Your score is <strong>${quizScore}/${questions.length}</strong>. It's ok, you can try again!`;
  }

  document.getElementById("nextButton").style.display = "none";  
}
}

displayQuestion();