const {sign} = require("jsonwebtoken");
module.exports =  (secret, data, issuer, callback) => {

    sign(data, secret, {
        expiresIn: "7d",
        issuer: issuer
    }, function (err, encoded) {

        if (err) {
            callback(new Error(err));

        } else {
            callback(null, encoded);

        }
    });
}