const fs = require('fs');

// var files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files){
    if( err ){
        // Kalau error, jalankan ini
        console.log("Error occured. Error message: " + err);
    } else {
        // Kalau sukses, jalankan ini
        console.log('Files in this directory are: ' + files);
    }
});