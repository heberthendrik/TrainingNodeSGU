// npm init --yes
// npm i express

// ENVIRONMENT VARILABLE
// export PORT=5000
// set PORT=5000

const express = require('express');
const app = express();


/*
*
* ROUTES HANDLER
*
*/

// HTTP REQUEST HANDLER DI ROOT
app.get("/", (req, res) => {
    res.send('Hello World!');
});

// HTTO REQUEST HANDLER DI /API/COURSES
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

