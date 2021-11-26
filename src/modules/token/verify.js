const { verify } = require("jsonwebtoken");

module.exports =  (token, secret, callback) => {

    verify(token, secret, {
        complete: true
    }, function (err, decoded) {

        if (err) {
            callback(new Error(err));

        } else {
            callback(null, decoded);

        }
    });
}