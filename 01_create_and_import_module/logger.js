var url = "http://sguloggingservice.com/log";

function log(message){
    // Send an HTTP request
    console.log(message);
}

module.exports.PublicLog = log;