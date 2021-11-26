const { compare } = require("bcryptjs");

module.exports =  (originalPassword, hashedPassword, callback) => {

    compare(originalPassword, hashedPassword, (err, state) => {

        if (err) {
            callback(new Error(err));
        } else {

            if (state)
                callback(null, true);

            else
                callback(null, false);

        }

    });
}