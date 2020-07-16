// npm init --yes
// npm i express

// ENVIRONMENT VARILABLE
// export PORT=5000
// set PORT=5000

// app.get()    --> ambil data
// app.post()   --> create data
// app.put()    --> update data
// app.delete() --> delete data

const express = require('express');
const app = express();


/*
*
* ROUTES HANDLER
*
*/

// HTTP REQUEST HANDLER DI ROOT


/*
NOTE
1. dalam 1 rute, kalian hanya bisa punya 1 respond.
2. bayangkan ROUTE adalah ibarat jabat tangan
3. HTTP request dikirim ke server, bayangkan itu adalah orang yang mau jabat tangan sama kita
4. Saat kita sudah jabat tangan dengan orang tersebut, maka klo ada orang lain yang 
mau jabat tangan juga dengan kalian, tidak bisa.
*/
app.get("/", (req, res) => {
    res.send('Hello World!');
});

// HTTP REQUEST HANDLER DI /API/COURSES
app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
});

// /api/courses/1
app.get("/api/courses/:id", (req, res) => {
    // res.send(req.params.id);

    // untuk ambil value dari essential value pakai methode --> params
    // untuk ambil value dari query string / optional value, pakai methode --> query

    res.send(req.query);
    
});





/*
*
* START WEB SERVICE
*
*/

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

