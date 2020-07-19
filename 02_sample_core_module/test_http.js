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

server.listen(3000);

console.log('listening on port 3000...');