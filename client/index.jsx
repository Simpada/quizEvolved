import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

//const root = createRoot(document.getElementById("app"));

function FrontPage() {

    return <div>
        <h1> Welcome to A Fabulous Math Quiz </h1>
        <ul><Link to={"/login"}> Login </Link></ul>
        <ul><Link to={"/register"}> Register new User </Link></ul>
        <ul><Link to={"/test"}> Test redirect </Link></ul>
    </div>

    /*return <div>
        <h1> Welcome to A Fabulous Math Quiz </h1>
        <ul>
            <li><Link to={"/quiz"}> Start The Quiz </Link></li>
            <li><Link to={"/quiz/add"}> Add a Question </Link></li>
            <li><Link to={"/quiz/scores"}> See Scores </Link></li>
        </ul>
    </div>*/
}

export function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/test"} element={<Test/>}/>
        </Routes>
    </BrowserRouter>
}

function Login() {
    return <div>
        <h1> Log in </h1>
        <form action="/login" method="post">
            <div>Username: <input type="text" name="username" /></div>
            <div>Password: <input type="password" name="password" /> </div>
            <div><button>Login</button></div>
        </form>
    </div>
}

function Register() {
    return <div>
        <h1> Register new user </h1>
        <div>
            <form action="/register" method="post">
                <div>Username: <input type="text" name="username" /></div>
                <div>Password: <input type="password" name="password" /> </div>
                <div><button>Register</button></div>
            </form>
        </div>
    </div>
}

function Test() {
    return <div>
        Should not ever be seen!
    </div>
}

/*

<Route path={"/quiz/*"} element={<QuizApplication/>}/>
<Route path={"/*"} element={<h1> You made a mistake fool, this domain does not exist! </h1>}/>
 */

ReactDOM.render(<Application/>, document.getElementById("app"))

//root.render(<h1> Hello from the React side of things </h1>)
