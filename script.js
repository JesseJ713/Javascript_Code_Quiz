// Declaring HTML variables
var homePage = document.getElementById("homepage");
var startQuizBtn = document.getElementById("startquiz");
var showScoreBtn = document.getElementById("showscore");
var quizPage = document.getElementById("quizpage");
var question = document.getElementById("question");
var multipleChoice = document.getElementById("multiplechoice");
var timer = document.getElementById("timer");
var currentScorePage = document.getElementById("currentscorepage");
var currentScoreDisplay = document.getElementById("currentscoredisplay");
var inputInitials = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submitscorebtn");
var highScorePage = document.getElementById("highscorepage");
var highScoreList = document.getElementById("highscorelist");
var highScoreInitial = document.getElementById("highscoreinitial");
var highScoreBadge = document.getElementById("highscorebadge");
var tryAgainBtn = document.getElementById("tryagainbtn");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var questionsArrayIndex = 0;
var totalTime = 100;
var timerInt; 
var score = 0;
var correct;

// Multiple Choice Questions

var quizQuestions = [{
    question: "What is the HTML tag under which one can write the JavaScript code?",
    choiceA: "<javascript>",
    choiceB: "<script>",
    choiceC: "<scripted>",
    choiceD: "<js>",
    correctAnswer: "B"
},
{
    question: "What is the correct syntax for referring to an external script called “script.js”?",
    choiceA: "<script src=”script.js”>",
    choiceB: "<script href=”script.js”>",
    choiceC: "<script ref=”script.js”>",
    choiceD: "<script name=”script.js”>",
    correctAnswer: "A"
},
{
    question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choiceA: "A central machine deep within Netscape's corporate offices",
    choiceB: "The Web server",
    choiceC: "JavaScript is not executed by a machine but rather through signals",
    choiceD: "The User's machine running a Web browser",
    correctAnswer: "D"
},
{
    question: " Which of the following best describes JavaScript?",
    choiceA: "A compiled scripting language",
    choiceB: "A low-level programming language",
    choiceC: "An object-oriented scripting language",
    choiceD: "A scripting language precompiled in the browser",
    correctAnswer: "C"
},
{
    question: "Which of the following is not a valid JavaScript variable name?",
    choiceA: "FirstAndLast",
    choiceB: " _first_and_last_names",
    choiceC: "2names",
    choiceD: "None of the above",
    correctAnswer: "C"
}];

var finalQuestion = quizQuestions.length;

// Starting the quiz
function quizStart() {
    homePage.style.display = "none";
    quizPage.style.display = "block";
    currentScorePage.style.display = "none";
    highScorePage.style.display = "none";
    cycleQuestions();

    timerInt = setInterval(() => {
        totalTime--;
        timer.textContent = totalTime;

    if (totalTime == 0) {
        clearInterval(timerInt);
        submitScore();
    }
}, 1000);
}

// Displaying score when the user completes the quiz or timer runs out
function submitScore() {
    currentScorePage.style.display = "block";
    homePage.style.display = "none";
    quizPage.style.display = "none";
    highScorePage.style.display = "none"
    clearInterval(timerInt);
    inputInitials.value = "";
    currentScoreDisplay.textContent = "Your score is " + score;
    };

// Submitting score to local storage
submitScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputInitials.value === "") {
        return alert("Please enter your initials");
    } else {
        var domHighScores = JSON.parse(localStorage.getItem("domHighScores")) || [];
        var currentUser = inputInitials.value;
        var currentHighScore = {
            name: currentUser,
            score: score,
        };
    }

    domHighScores.push(currentHighScore);
    localStorage.setItem("domHighScores", JSON.stringify(domHighScores));
    highScores();
});

// Function that parses the object array for the questions
function cycleQuestions() {
    quizPage.style.display = "block";
    homePage.style.display = "none";
    currentScorePage.style.display = "none";
    highScorePage.style.display = "none";
    if (questionsArrayIndex === finalQuestion) {
        submitScore();
    }
    var activeQuestion = quizQuestions[questionsArrayIndex];
    question.textContent = activeQuestion.question;
    buttonA.textContent = activeQuestion.choiceA;
    buttonB.textContent = activeQuestion.choiceB;
    buttonC.textContent = activeQuestion.choiceC;
    buttonD.textContent = activeQuestion.choiceD;
}

// Checking the answer to progress to next question
function answerCheck(answer) {
    correct = quizQuestions[questionsArrayIndex].correctAnswer;
    let correctAnswerText = quizQuestions[questionsArrayIndex][`choice${correct}`];
    if (answer === correctAnswerText && questionsArrayIndex !== finalQuestion) {
        score++;
        questionsArrayIndex++;
        alert("CORRECT!");
        cycleQuestions();
    } else if (answer !== correctAnswerText && questionsArrayIndex !== finalQuestion) {
        questionsArrayIndex++;
        alert("INCORRECT!");
        cycleQuestions();
    } else {
        submitScore();
    }
}

// End game to show score
function highScores() {
    quizPage.style.display = "none";
    homePage.style.display = "none";
    currentScorePage.style.display = "none";
    highScorePage.style.display = "block";

    highScoreInitial.innerHTML = "";
    highScoreBadge.innerHTML = "";
    var highScores = JSON.parse(localStorage.getItem("domHighScores")) || [];
    for (i=0; i < highScores.length; i++) {
        var newName = document.createElement("li");
        var newScore = document.createElement("span");
        newName.setAttribute("class", "list-group-item justify-content-between align-items-center" )
        newScore.setAttribute("class", "badge badge-primary badge-pill")
        newName.setAttribute("id", "highscoreinitial");
        newScore.setAttribute("id", "highscorebadge");
        newName.textContent = highScores[i].name;
        newScore.textContent = highScores[i].score;
        highScoreList.appendChild(newName);
        highScoreInitial.appendChild(newScore);
        console.log(newName);
        console.log(newScore);
    }
}

startQuizBtn.addEventListener("click", quizStart);

buttonA.addEventListener("click", function(event) {
    event.preventDefault();
    answerCheck(event.target.textContent)
})
buttonB.addEventListener("click", function(event) {
    event.preventDefault();
    answerCheck(event.target.textContent)
})
buttonC.addEventListener("click", function(event) {
    event.preventDefault();
    answerCheck(event.target.textContent)
})
buttonD.addEventListener("click", function(event) {
    event.preventDefault();
    answerCheck(event.target.textContent)
})
submitScoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    highScores();
})
showScoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    highScores();
})

tryAgainBtn.addEventListener("click", function(event){
    event.preventDefault();
    quizStart();
})