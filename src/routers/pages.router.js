const pagesRouter = require("express").Router();

pagesRouter.get("/home", function (req, res, next) {
    res.status(200).render("index");
});

module.exports = pagesRouter;