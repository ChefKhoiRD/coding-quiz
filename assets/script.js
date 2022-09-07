// grabbing elements from html
const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const submit = document.getElementById('submit');
const timerDisplay = document.getElementById('timerDisplay');
const answer = document.querySelectorAll('.answer');
const startButton = document.getElementById('start-btn');
const quiz = document.getElementById('quiz-app');

// creating quiz questions
const quizQuestions = [
    {
        question: 'An if statement should be enclosed with _____',
        a: 'semi colon',
        b: 'curly brackets',
        c: 'parenthesis',
        correct: 'c',
    },
    {
        question: 'What tag is used to define and place an interactive button in an HTML document?',
        a: '<button>',
        b: '<footer>',
        c: '<li>',
        correct: 'a',
    },
    {
        question: 'What tag is used to define an image or add an image to an HTML page?',
        a: '<div>',
        b: '<ul>',
        c: '<img>',
        correct: 'c',
    },
];

// quiz logic
let i = 0;
let score = 0;
let time;



// get answer
function getAnswer() {
    answer.forEach((el) => {
        if (el.checked) {
            ans = el.id;
        }
    });
    return ans;
};

// unselect answer when user goes to next question
function undoAnswer() {
    answer.forEach((el) => {
        el.checked = false;
    });
};

// get quiz data
function getQuiz() {
    undoAnswer();
    question.innerText = quizQuestions[i].question;
    a.innerText = quizQuestions[i].a;
    b.innerText = quizQuestions[i].b;
    c.innerText = quizQuestions[i].c;
};

// move forwards when question is answered
function startQuiz() {
    submit.addEventListener('click', () => {
        let ans = getAnswer();
        if (ans) {
            if (ans == quizQuestions[i].correct) {
                score++;
            }
        }
    i++;
        if (i < quizQuestions.length) {
            getQuiz();
        } else {
            alert ("Score: " + score + " Out of 3");
        }
    });
};

// time remaining and subtract 5 seconds when given an incorrect answer
let sec = 60;
function startTimer() {
    const timer = setInterval(function(){
        sec--;
        timerDisplay.innerText = "00:" + sec;
        if (sec < 0) {
        alert ("Time is up, Score: " + score + " Out of 3")
            }
        }, 1000);
    }
    submit.addEventListener('click', function() {
        let ans = getAnswer();
        if (ans) {
            if (ans !== quizQuestions[i].correct) {
                sec -= 5;
                timerDisplay.innerText = "00:" + sec; 
        }
    }
});

// Hide quiz until start button is clicked
function hideGame() {
    quiz.style.display = "block";
}

// start game
function startGame() {
    hideGame();
    startTimer();
    getQuiz();
    startQuiz();
}

// Start button runs start game function
startButton.addEventListener("click", startGame);