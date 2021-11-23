import { genSalt, hash } from "bcryptjs";

function genrateSalt(callback) {
    genSalt( (err, salt) => {
        if (err) {
            callback(new Error(err));
        } else {
            callback(null, salt);
        }
    })
}

export default (orignalPassword, callback) => {

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