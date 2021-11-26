const {genSalt, hash} = require("bcryptjs");

function genrateSalt(callback) {
    genSalt( (err, salt) => {
        if (err) {
            callback(new Error(err));
        } else {
            callback(null, salt);
        }
    })
}

module.exports =  (orignalPassword, callback) => {

    genrateSalt( (err, salt) => {

        if (err) {
            callback(new Error(err));
        } else {

            hash(orignalPassword, salt, (err, hash) => {

                if (err) {
                    callback(new Error(err));
                } else {
                    callback(null, hash);
                }

            });
        }
    });

}