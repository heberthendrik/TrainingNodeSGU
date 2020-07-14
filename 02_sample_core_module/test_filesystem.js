/*
NOTES

- ada banyak core module node yang bisa kita gunakan untuk 
melengkapi node app kita, seperti fs, OS, dan path

- untuk menggunakan module-module tersebut, kita perlu melakukan
import. Sama halnya dengan melakukan import file .js, kita perlu method require

- perilaku berbeda apabila kita mau import core module node, karena kita
tidak perlu memberikan keterangan base path nya, contoh
--> require('./test_os.js')  // ini untuk import file js buatan sendiri
--> require('fs') // ini untuk import core module

- untuk cara penggunaan core module node, bisa refer ke documentation nodejs
di nodejs.org


*/

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

// ini test notes untuk git