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

app.use(express.json());


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


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

/*
app.get("/", (req, res) => {
    res.send('Hello World!');
});
*/

// HTTP REQUEST HANDLER DI /API/COURSES
app.get("/api/courses", (req, res) => {
    res.send( courses );
});

// ROUTE PARAMETER
// /api/courses/1
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if( !course ) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

// POST -> gunanya untuk create data
app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    // res.send(course);
    return null;
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

