// ENVIRONMENT VARILABLE



const express = require('express');
const app = express();

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







// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

