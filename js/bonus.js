(function(){
  function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is the day before Mardi Gras called?",
      answers: {
        a: "Point Gras",
        b: "Sammer Gras",
        c: "Lundi Gras"
      },
      correctAnswer: "c"
    },
    {
      question: "What day comes after Mardi Gras?",
      answers: {
        a: "Ash Sunday",
        b: "Ash Monday",
        c: "Ash Wednesday"
      },
      correctAnswer: "c"
    },
    {
      question: "Where was the first known carnival celebration?",
      answers: {
        a: "New York",
        b: "New Orleans",
        c: "Nice, France",
      },
      correctAnswer: "c"
    },
    {
              question: "What is the signature Mardi Gras dessert?",
              answers: {
        a: "King cake",
        b: "Cheeze Cake",
        c: "Brown Cake",
        
      },
      correctAnswer: "a"

    },
{
       question: "What is traditionally hidden inside a king cake?",
              answers: {
        a: "Mask",
        b: "A plastic baby",
        c: "Big spoon",
        
      },
      correctAnswer: "b"
},
{
    question: "What are the groups that organize New Orleans Mardi Gras parades called?",
              answers: {
        a: "Mardi Gras Group",
        b: "Spenders",
        c: "Krewes",
        
      },
      correctAnswer: "c"
},
{
     question: "Bacchus is the Roman god of what?",
              answers: {
        a: "Water",
        b: "Wine",
        c: "Love",
        
      },
      correctAnswer: "b"
},
{
    question: "What is the most popular food for Shrove Tuesday?",
              answers: {
        a: "Pancakes",
        b: "Cakes",
        c: "Hot dog",
        
      },
      correctAnswer: "a"
},
{
     question: "What is the most popular Mardi Gras saying?",
              answers: {
        a: "“Laissez les bon temps rouler.”",
        b: "Party hard in Mardi Gras!",
        c: "Let's get it!",
        
      },
      correctAnswer: "a"
},
{
    question: "What song is the anthem of Mardi Gras in New Orleans?",
              answers: {
        a: "Cest la vie",
        b: "“If I Cease to Love”!",
        c: "Les moi te me",
        
      },
      correctAnswer: "a"
}
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();