/**
 * @param {function} database dependse injection the database module
 * @param {function} core dependse injection express
 * @returns {function} express application
 */
function app(database, core) {

    /*
        Handel json data
    */
    express.use(core.json());
    express.use(core.urlencoded({
        extended: true
    }));

    /*
        express application
    */
    const express = core();

    /*
        Static Files
    */
    express.use("/public", core.static("./public"));

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
        error handeler
    */
    express.use(function (err, req, res) {
        res.status(500).json({
            error: true,
            message: `${req.url} \n Server Error `,
            data: err
        });
    });
};

module.exports = app;