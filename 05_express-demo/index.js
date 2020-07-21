const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TEMPORARY VARILABLE
const courses = [
    { id: 1, name: 'Matematika' },
    { id: 2, name: 'Kimia' },
    { id: 3, name: 'Fisika' },
    { id: 4, name: 'Web Programming' }
];


// GET ALL COURSE
app.get("/api/courses", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.send( courses );
});

// GET 1 COURSE DETAIL
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if( !course ) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

// ADD NEW COURSE
app.post("/api/courses", (req, res) => {

    // VALIDASI USING SCHEMA
    const {error} = validateCourse(req.body); 
    if( error ){
        return res.status(400).send(error.details[0].message);
    } 

    // ADD NEW COURSE
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    return res.send(course);
});

// UPDATE COURSE BY ID
app.put('/api/courses/:id', (req, res) => {

    // VALIDASI USING SCHEMA
    const {error} = validateCourse(req.body); 
    if( error ){
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    } 

    // FIND MATCH COURSE
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if( !course ) return res.status(404).send('The course with the given ID was not found.');

    // UPDATE COURSE
    course.name = req.body.name;
    return res.send(course);

});

// DELETE COURSE BY ID
app.delete('/api/courses/:id', (req, res) => {

    // FIND MATCH COURSE
    const course = courses.find( c => c.id === parseInt(req.params.id) );
    if( !course ) return res.status(404).send('The course with the given ID was not found.');

    // DELETE COURSE
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    console.log("Course ID "+req.params.id+" telah berhasil dihapus");

    // RETURN DELETED COURSE
    return res.send(course);
});

// FUNCTION TO VALIDATE COURSE
function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

// START WEB SERVICE
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

