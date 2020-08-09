// Declaring HTML variables
var homePage = document.getElementById("homepage");
var startQuizBtn = document.getElementById("startquiz");
var showScoreBtn = document.getElementById("showscore");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var multipleChoice = document.getElementById("multiplechoice");
var timer = document.getElementById("timer");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var questionsArrayIndex = 0;

// Multiple Choice Questions

var quizQuestions = [{
    question: "What is the HTML tag under which one can write the JavaScript code?",
    choiceA: "<javascript>",
    choiceB: "<script>",
    choiceC: "<scripted>",
    choiceD: "<js>",
    correctAnswer: "B",
},
{
    question: "What is the correct syntax for referring to an external script called “script.js”?",
    choiceA: "<script src=”script.js”>",
    choiceB: "<script href=”script.js”>",
    choiceC: "<script ref=”script.js”>",
    choiceD: "<script name=”script.js”>",
    correctAnswer: "A",
},
{
    question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choiceA: "A central machine deep within Netscape's corporate offices",
    choiceB: "The Web server",
    choiceC: "JavaScript is not executed by a machine but rather through signals",
    choiceD: "The User's machine running a Web browser",
    correctAnswer: "D",
},
{
    question: " Which of the following best describes JavaScript?",
    choiceA: "A compiled scripting language",
    choiceB: "A low-level programming language",
    choiceC: "An object-oriented scripting language",
    choiceD: "A scripting language precompiled in the browser",
    correctAnswer: "C",
},
{
    question: "Which of the following is not a valid JavaScript variable name?",
    choiceA: "FirstAndLast",
    choiceB: " _first_and_last_names",
    choiceC: "2names",
    choiceD: "None of the above",
    correctAnswer: "C",
}];


