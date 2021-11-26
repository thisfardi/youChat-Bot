const events = require("./index.js");
const {
    webhooks
} = events;

webhooks.on("message", function (data) {
    fetch({
        method: "post",
        url: data.url,
    }).then(function (response) {

    }).catch(function (err) {

    })
})