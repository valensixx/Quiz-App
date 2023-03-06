const question = document.getElementById('question');
//const choices = Array.from(document.getElementById('choice-text'));
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Where would you be if you were standing on the Spanish Steps?" ,
        choice1:"Rome",
        choice2:"Bulgaria",
        choice3:"China",
        choice4:"Spain",
        answer: 1
    },
    {
        question: "What is the most common surname in the United States?" ,
        choice1:"Alfred",
        choice2:"Jhon",
        choice3:"Smith",
        choice4:"Neo",
        answer: 3
    },
    {
        question: "Which planet in the Milky Way is the hottest?" ,
        choice1:"Mars",
        choice2:"Venus",
        choice3:"Earth",
        choice4:"Uranus",
        answer: 2
    },
    {
        question: "How many hearts does an octopus have?" ,
        choice1:"8",
        choice2:"1",
        choice3:"2",
        choice4:"3",
        answer: 4
    },

]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter ++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); 
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

startGame();