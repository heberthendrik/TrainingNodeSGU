const fs = require('fs');

// var files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files){
    if( err ) console.log("Error occured. Error message: " + err);
    else console.log('Files in this directory are: ' + files);
});