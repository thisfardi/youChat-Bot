const express = require("express");
const pagesRouter = require("./routers/pages.router.js");
const session = require("express-session");

/*
    express application
*/
const app = express();

/*
    enable sessions
*/
app.use(session({
    secret: "chatbot",
    resave: false,
    cookie: {secure: true,
    sameSite: true},
    saveUninitialized: true
}));

/*
    Handel json data
*/
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/*
    Enable APM
*/
app.use(require("express-status-monitor")())

/*
    disable x powered by
*/
app.disable("x-powered-by");

/*
    Static Files
*/
app.use("/public", express.static("./public"));

/*
    set views directory
*/
app.set("views", "./src/views");

/*
    setup the view engine
*/
app.set("view engine", "ejs");

/*
    this endpoints is for testing the server
*/
app.get('/', function (req, res, next) {
    res.status(200).send("nothing")
})
app.get('/err', function (req, res, next) {
    next(err);
})

/*
    add all the routers
*/
app.use("/", pagesRouter);

module.exports = app;