import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {QuizApplication} from "./quizApplication";

function FrontPage() {
    return <div>
        <h1> Welcome to A Fabulous Math Quiz! </h1>
        <ul>
            <li><Link to={"/quiz"}> Start The Quiz </Link></li>
            <li><Link to={"/quiz/add"}> Add a Question </Link></li>
            <li><Link to={"/quiz/scores"}> See Scores </Link></li>
        </ul>
    </div>
}

export function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/quiz/*"} element={<QuizApplication/>}/>
            <Route path={"/*"} element={<h1> You made a mistake fool, this domain does not exist! </h1>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(<Application/>, document.getElementById("app"))