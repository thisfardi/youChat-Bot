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

module.exports =  (orignalPassword) => {
    return new Promise((resolve, reject) => {
        genrateSalt( (err, salt) => {

            if (err) {
                reject(err);
            } else {
    
                hash(orignalPassword, salt, (err, hash) => {
    
                    if (err) {
                        reject(err);
                    } else {
                        resolve(hash);
                    }
    
                });
            }
        });
    });

}