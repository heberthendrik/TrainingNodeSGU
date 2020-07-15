/*

file system -> fs
operating system -> os
path -> path

HTTP module -> untuk membuat networking application.
- web server, listen HTTP request 

*/

const http = require('http');
const server = http.createServer( (req, res) => {

    // HANDLE HTTP REQUEST UNTUK ROOT URL
    if( req.url === "/" ){
        res.write('Hello World');
        res.end();
    } 

    // HANDLE HTTP REQUEST /sgu/training
    else if( req.url === '/sgu/training' ){
        res.write('ini adalah route kedua dari incoming HTTP request');
        res.end();
    }


});



/*
*
* Contoh penggunaan HTTP module, untuk incoming HTTP request
*
*/
/*
server.on('connection', (socket) => {
    // perintah yang mau dijalankan kalau ada incoming connection
    // atau ada HTTP request ke server kita
    console.log('New HTTP request, coming...');
});
*/

server.listen(3000);

console.log('listening on port 3000...');