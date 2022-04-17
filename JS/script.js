

// Questions will be asked
var questions = [
    {
    title: "How do flamingos get their color?",
    choices: ["Their feathers turn pink as they get older.", "They are born that way.", "From things they eat, like shrimp.", "It is a sunburn."],
    answer: "From things they eat, like shrimp."
    },
    {
    title: "What is the capital of Thailand?",
    choices: ["Lampang", "Phuket", "Ayutthaya", "Bangkok"],
    answer: "Bangkok"
    },
    {
    title: "How many ways are there to make change for a dollar?",
    choices: [
        "328",
        "138",
        "293",
        "5"
    ],
    answer: "293"
    },
    {
    title:
        "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
    },
    {
    title:
        "What pokemon was first created?",
    choices: ["Pikachu", "Rhydon", "Snorlax", "Diglet"],
    answer: "Rhydon"
    }
];

let timeStart = 80;
var timeState;
var timer = document.querySelector(".timer");
var startBtn = document.getElementById("start");
var questionIndex = 0;
var quizQuestMain = document.getElementById("quiz-content");
var questionTitle = document.getElementById("question");
var answers= document.getElementById('answer-container');
var startScreen = document.getElementById("start-screen");

var newScore = document.getElementById("score");
var initials = document.getElementById("name");
var submitBtn = document.getElementById("submitBtn");


function timerInt () {
    timeStart--;
    timer.textContent = timeStart;
    if (timeStart === 0) {
        clearInterval(timeState);
        alert("Time is up!");
        return;
    }
}

function startQuiz () {
    timeState = setInterval(timerInt, 1000);
    startScreen.classList.add("hide");
    quizQuestMain.classList.remove("hide");

    renderQuestion();
}

function renderQuestion () {
    var curQuestion = questions[questionIndex];
    questionTitle.textContent = curQuestion.title;
    curQuestion.choices.forEach(function (choice, i) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "answer-btn");
        answerBtn.setAttribute("value", choice);
        answerBtn.textContent = choice;
        answerBtn.addEventListener("click", checkAnswer);
        answers.appendChild(answerBtn);
    });
}

function checkAnswer () {
    if (this.value === questions[questionIndex].answer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
        timeStart -= 10;
        timer.textContent = timeStart;
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        quizQuestMain.classList.add("hide");

        window.location.href = "highscore.html";
    } else {
        answers.innerHTML = "";
        renderQuestion();
    }
}

function scoreSave () {
    var userName = initials.value;
    var userScore = timeStart;
    var userScoreObj = {
        name: userName,
        score: userScore
    }
    var scoreArray = JSON.parse (localStorage.getItem("scoreArray")) || [];
    scoreArray.push(userScoreObj);
    localStorage.setItem("scoreArray", JSON.stringify(userScoreObj));
}

startBtn.onclick = startQuiz;
submitBtn.onclick = scoreSave;