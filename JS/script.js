const timeStart = 80;
var time = timeStart;
var timer = document.querySelector(".clock");
var interval;


// Questions will be asked
const Questions = [{
    id: 0,
    q: "How do flamingos get their color?",
    a: [{ text: "Their feathers turn pink as they get older.", isCorrect: false },
        { text: "They are born that way.", isCorrect: false },
        { text: "From things they eat, like shrimp.", isCorrect: true },
        { text: "It is a sunburn.", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "Phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "How many ways are there to make change for a dollar?",
    a: [{ text: "328", isCorrect: false },
        { text: "138", isCorrect: false },
        { text: "293", isCorrect: true },
        { text: "5", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What pokemon was first created?",
    a: [{text:"Pikachu", isCorrect: false },
        {text:"Rhydon", isCorrect: true },
        {text:"Snorlax", isCorrect: false },
        {text:"Diglet", isCorrect: false },
    ]

}
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const an1 = document.getElementById('op1');
const an2 = document.getElementById('op2');
const an3 = document.getElementById('op3');
const an4 = document.getElementById('op4');


// Providing option text
an1.innerText = Questions[id].a[0].text;
an2.innerText = Questions[id].a[1].text;
an3.innerText = Questions[id].a[2].text;
an4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
an1.value = Questions[id].a[0].isCorrect;
an2.value = Questions[id].a[1].isCorrect;
an3.value = Questions[id].a[2].isCorrect;
an4.value = Questions[id].a[3].isCorrect;

var chosen = "";

// Show selection for an1
an1.addEventListener("click", () => {
    an1.style.backgroundColor = "colDkYellow";
    an2.style.backgroundColor = "colDkYellow";
    an3.style.backgroundColor = "#f75c03";
    an4.style.backgroundColor = "colDkYellow";
    chosen = an1.value;
})

// Show selection for an2
an2.addEventListener("click", () => {
    an1.style.backgroundColor = "colDkYellow";
    an2.style.backgroundColor = "colDkYellow";
    an3.style.backgroundColor = "colDkYellow";
    an4.style.backgroundColor = "#f75c03";
    chosen = an2.value;
})

// Show selection for an3
an3.addEventListener("click", () => {
    an1.style.backgroundColor = "colDkYellow";
    an2.style.backgroundColor = "#f75c03";
    an3.style.backgroundColor = "colDkYellow";
    an4.style.backgroundColor = "colDkYellow";
    chosen = an3.value;
})

// Show selection for an4
an4.addEventListener("click", () => {
    an1.style.backgroundColor = "colDkYellow";
    an2.style.backgroundColor = "colDkYellow";
    an3.style.backgroundColor = "colDkYellow";
    an4.style.backgroundColor = "#f75c03";
    chosen = an4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})

//timer
function startTimer() {
    time = timeCLock;
    timer.innerHTML = "Time: " + time + "s";
    interval = setInterval(function(){
        time--;
        timer.innerHTML = "Time: " + time + "s";

        if (time <= 0) {
            endQuiz();
        }
        
    }, 3000);
} 

function startTimer() {}