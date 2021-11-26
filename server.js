const { createServer } = require("http");
const app = require("./src/app.js");
const { PORT } = require("./src/config/config.js");
const rate_limit = require("express-rate-limit");


/*
    create the http server
*/
const http_server = createServer(app);

/*
    disable x-powerd-by
*/
app.disable("x-powered-by");

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
app.use(rateLimiter);

/*
    unhandeled requests
*/
app.use("*", (req, res) => {
    //send 404 response
    res.status(404).json({
        error: true,
        message: 'Not Found!',
        data: []
    });
});

/*
    error handeler
*/
app.use( (err, req, res, next) => {
    res.status(500).json({
        error: true,
        message: `${req.url} \n Server Error `,
        data: err
    });
});

/*
    listen to port 2022
*/
http_server.listen(PORT);

module.exports = http_server;