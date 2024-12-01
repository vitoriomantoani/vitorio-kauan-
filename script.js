const questions = [
    {
      question: "Qual é a capital do Brasil?",
      answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      correct: 1
    },
    {
      question: "Quantos estados tem o Brasil?",
      answers: ["25", "26", "27", "28"],
      correct: 2
    },
    {
      question: "Qual é o maior planeta do Sistema Solar?",
      answers: ["Terra", "Marte", "Júpiter", "Saturno"],
      correct: 2
    }
  ];
  
  let currentQuestion = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("next");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.innerText = q.question;
  
    answersElement.innerHTML = "";
    q.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.onclick = () => selectAnswer(index);
      answersElement.appendChild(button);
    });
  }
  
  function selectAnswer(index) {
    const buttons = answersElement.querySelectorAll("button");
    buttons.forEach((button, i) => {
      button.classList.remove("correct", "wrong");
      if (i === questions[currentQuestion].correct) {
        button.classList.add("correct");
      } else if (i === index) {
        button.classList.add("wrong");
      }
    });
    nextButton.disabled = false;
  }
  
  nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      questionElement.innerText = "Você completou o quiz!";
      answersElement.innerHTML = "";
      nextButton.style.display = "none";
    }
    nextButton.disabled = true;
  };
  
  loadQuestion();
  