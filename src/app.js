const expressCore = require("express"),
      rate_limit = require("express-rate-limit");

    /*
        express application
    */
    const express = expressCore();

    /*
        disable x-powerd-by
    */
    express.disable("x-powered-by");

    /*
        configure rate limit
    */
    const rateLimiter = rate_limit({
        windowMs: 25 * 60 * 1000,
        max: 20
    });

    /*
        enable rate limit
    */
    express.use(rateLimiter);

    /*
        Handel json data
    */
    express.use(expressCore.json());
    express.use(expressCore.urlencoded({
        extended: true
    }));

    /*
        Static Files
    */
    express.use("/public", expressCore.static("./public"));

    /*
        this endpoints is for testing the server
    */
    express.get('/' , (req, res , next) => {
        res.status(200).send("nothing")
    })
    express.get('/err' , (req, res , next) => {
        throw Error("database error")
    })

    /*
        unhandeled requests
    */
    express.use("*", (req, res) => {
        //send 404 response
        res.status(404).json({
            error: true,
            message: 'Not Found!',
            data: []
        });
    });

    /*
        set views directory
    */
    express.set("views", "./views");

    /*
        setup the view engine
    */
    express.set("view engine", "ejs");

    /*
        error handeler
    */
    express.use(function (err, req, res) {
        res.status(500).json({
            error: true,
            message: `${req.url} \n Server Error `,
            data: err
        });
    });

module.exports = express;