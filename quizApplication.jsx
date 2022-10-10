import {Link, Route, Routes} from "react-router-dom";
import * as React from "react";
import {Application} from "./index";

const QUIZ = [
    {
        question: "What is 1 + 1?",
        answer1: "11",
        answer2: "21",
        answer3: "3",
        answer4: "2",
        correct: 4,
        success: "You da big brein",
        fail: "*Sigh*"
    },
    {
        question: "What is next in the sequence 1, 3, 5, 7?",
        answer1: "9",
        answer2: "217341",
        answer3: "11",
        answer4: "8",
        correct: 2,
        success: "Congratulations, you actually know basic maths!",
        fail: "Really? you couldn't even do that? It's kinda easy! " +
            "as f(x) = 18111/2*x^4-90555*x^3+63385/2*x^2-452773*x+217331 obviously. " +
            "so f(1)=1, f(2)=3, f(3)=5, f(4)=7, f(5)=217341, see, easy!"
    },
    {
        question: "What is True + True * False?",
        answer1: "1",
        answer2: "False",
        answer3: "Seventeen",
        answer4: "42",
        correct: 1,
        success: "That is 1",
        fail: "That is (Boolean) True - True"
    },
    {
        question: 'What is "4" + "2"',
        answer1: "6",
        answer2: "NaN",
        answer3: "42",
        answer4: "7",
        correct: 3,
        success: "Its The Meaning of Life, The Universe, and Everything",
        fail: "You're a disappointment!"
    },
    {
        question: 'What is "a" - 1',
        answer1: "0",
        answer2: "88",
        answer3: "-1",
        answer4: "NaN",
        correct: 4,
        success: "nanananananana NaNNaN",
        fail: "That's a number!"
    }
]

let questionAnswerer = false;

let questionNr = 0;
let score = 0;

function shuffle (array) {
    let currentIndex = array.length, temporaryArray, randomIndex;

    while (currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex--);

        temporaryArray = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryArray;
    }
    return array;
}

function QuizCard({quiz}) {
    const {question, answer1, answer2, answer3, answer4} = quiz;

    return <div id="quizQuestion">
        <h2 id="question"> {question} </h2>
        <button id="answer1" onClick={() => CheckAnswer(1)} className="answer"> {answer1} </button> <br/>
        <button id="answer2" onClick={() => CheckAnswer(2)} className="answer"> {answer2} </button> <br/>
        <button id="answer3" onClick={() => CheckAnswer(3)} className="answer"> {answer3} </button> <br/>
        <button id="answer4" onClick={() => CheckAnswer(4)} className="answer"> {answer4} </button> <br/>
        <div id="response">  </div>
        <br/>
    </div>;
}

function CheckAnswer(answer) {

    if (!questionAnswerer) {

        let responseDiv = document.getElementById("response");
        let message;
        if (answer === QUIZ[questionNr].correct) {
            message = QUIZ[questionNr].success;
            score++;
        } else {
            message = QUIZ[questionNr].fail;
        }

        let answerButtons = document.getElementsByClassName("answer");
        for (let answerButton of answerButtons) {
            answerButton.style.backgroundColor = "red";
        }
        let rightButton = "answer" + QUIZ[questionNr].correct;
        document.getElementById(rightButton).style.backgroundColor = "green";

        questionAnswerer = true;
        questionNr++;

        if (questionNr < QUIZ.length) {
            responseDiv.innerHTML = message +
                '<br/>' +
                '<button id="next"> Next Question </button>';
            document.getElementById("next").onclick = NextQuestion;
        } else {
            responseDiv.innerHTML = message +
                '<br/>' +
                '<button id="next"> See Scores </button>';
            document.getElementById("next").onclick = GetResult;
        }
    }
}

function NextQuestion() {

    questionAnswerer = false;

    let question = QUIZ[questionNr];

    let answerButtons = document.getElementsByClassName("answer");
    for (let answerButton of answerButtons) {
        answerButton.style.backgroundColor = "";
    }

    document.getElementById("question").innerHTML = question.question;
    document.getElementById("answer1").innerHTML = question.answer1;
    document.getElementById("answer2").innerHTML = question.answer2;
    document.getElementById("answer3").innerHTML = question.answer3;
    document.getElementById("answer4").innerHTML = question.answer4;
    document.getElementById("response").innerHTML = "";


}

function GetResult() {
    document.getElementById("quizQuestion").innerHTML = "Your score is: " + score;
}

export function StartQuiz () {

    shuffle(QUIZ);
    questionNr = 0;
    score = 0;
    questionAnswerer = false;

    return PrintQuestion();

}

function PrintQuestion() {

    return <div>
        <h1> The Grand Math Quiz </h1>
        <Link to={".."}> Back </Link>
        {<QuizCard quiz={QUIZ[questionNr]}/>}
    </div>
}


export function QuizApplication() {
    return <Routes>
        <Route path={"/"} element={<StartQuiz first={true}/>}/>
        <Route path={".."} element={<Application/>}/>
        <Route path={"/add"} element={<h1> Here you can add questions </h1>}/>
        <Route path={"/scores"} element={<h1> Here you can see scores </h1>}/>
    </Routes>
}
