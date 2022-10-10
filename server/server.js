import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "express";
import {loginMiddleware, loginPath, usersPath} from "./paths.js";

const app = express();


/*
app.get("/login", (req, res, next) => {
    res.json({username: "Testsson"});
});

app.post("/login", (req, res, next) => {
    res.sendStatus(401);
});
*/

//app.use(cookieParser(process.env.COOKIE_SECRET));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cookieParser("Secret text, shhhhh"));

app.use(loginMiddleware);
app.use("/login", loginPath);
app.use("/register", usersPath);
app.use("/test", usersPath);

app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000,
    () => {
    console.log('I have started on: http://localhost:' + server.address().port);
});
