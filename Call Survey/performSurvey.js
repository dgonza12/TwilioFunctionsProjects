exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
    const phoneToCall = event.phone;
    const worker = event.worker;
    const callFrom = context.CALL_FROM_NUMBER;
    const twimlURL = '';

    client.calls
        .create({
            url: `${twimlURL}?worker=${worker}`,
            to: phoneToCall,
            from: callFrom
        })
        .then(call => {callback(null)});
};