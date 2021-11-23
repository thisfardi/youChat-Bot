import express, { json, urlencoded } from "express";
import pagesRouter from "./routers/pages.router.js";

/*
    express application
*/
const app = express();

/*
    Handel json data
*/
app.use(json());
app.use(urlencoded({
    extended: true
}));

/*
    Static Files
*/
app.use("/public", express.static("./public"));

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

/*
    set views directory
*/
app.set("views", "./views");

/*
    setup the view engine
*/
app.set("view engine", "ejs");

export default app;