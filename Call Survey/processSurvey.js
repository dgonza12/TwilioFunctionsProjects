exports.handler = function(context, event, callback) {
    console.log(event.Digits);
    console.log(event.worker);
    callback(null);
};