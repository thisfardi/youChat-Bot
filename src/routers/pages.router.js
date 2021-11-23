import { Router as pagesRouter } from 'express';

pagesRouter().get("/home", function (req, res, next) {
    res.status(200).render("index");
});

export default pagesRouter;