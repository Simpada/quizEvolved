import express from "express";

export const loginPath = new express.Router();
export const usersPath = new express.Router();
export const testPath = new express.Router();

export const USERS = [
    {
        username: "admin",
        password: "admin",
        fullname: "Testsson"
    }
];

testPath.get("/", (req, res) => {
    res.redirect("/");
})

loginPath.get("/", (req, res) => {
    const {username} = req.signedCookies;
    const user = USERS.find(u => u.username === username);
    res.json(user);
});

loginPath.post("/", (req, res) => {
   const {username, password} = req.body;

   const user = USERS.find(u => u.username === username);

   if (user && user.password === password) {
       res.cookie("username", username, {signed : true});
       res.sendStatus(200)
           .redirect("/");
   } else {
       res.sendStatus(401)
           .redirect("/")
   }

});

usersPath.get("/", (req, res) => {
    if (!res.user) {
        return res.sendStatus(403);
    }
    res.json(USERS);
});

usersPath.post("/", (req, res) => {
   const {username, password, fullname} = req.body;
   if (!username || !password || !fullname) {
       return res.sendStatus(400);
   }
   USERS.push({username: username, password: password, fullname: fullname});

   res.redirect("/")
});

export function loginMiddleware (req, res, next) {
    res.user = USERS.find(u => u.username === req.signedCookies?.username);
    next();
}