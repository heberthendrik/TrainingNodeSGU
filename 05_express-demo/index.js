const express = require('express');
const app = express();

app.use(express.json());

/*
*
* LOCAL VARILABLE, DATABASE COURSE
*
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


/*
*
* WEB SERVICE UNTUK RETURN ALL COURSES
*
*/
app.get("/api/courses", (req, res) => {
    res.send( courses );
});

/*
* 
* WEB SERVICE UNTUK RETURN 1 OBJECT COURSE BY COURSE ID
*
*/
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if( !course ) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

/*
*
* WEB SERVICE UNTUK ADD 1 DATA BARU KE DALAM MASTER DATA COURSES
*
*/
app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
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

