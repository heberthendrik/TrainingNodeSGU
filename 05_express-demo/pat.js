const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

//ROUTE HANDLER
/*
app.get()
app.post()
app.put()
app.delete()

sdh pasti pakai callback function dgn 2 parameter, yaitu req, res
4 method itu sdh mengenali core nodejs req, res
*/

/*
app.get('/', (req, res) => {
    //sama aja kayak function asala itu adalah callback function
});
*/

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

// app.get("/", function(req, res){
//     res.send('Hello World');
// });

// app.get("/api/courses", function(req, res){
//     res.send([1, 2, 3]);
// });

app.get("/api/courses", function(req, res){
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Error 404. The course with the given ID was not found.'); // object/resources tdk ditemukan
    // 404 -> object not found
    // 400 -> bad request
    // 200 -> ok
    // res.send(course);

    const {error} = validateCourse(req.body); //result.error
    if(error) {
        //400 bad request
        return res.status(400).send(error.details[0].message);
    }

    //let n const biasa yg paling banyak dipakai
    // 404 -> standard d networking -> object/resource yg mau dicari, ga ketemu
    
    // res.send(req.query);
});

//POST -> buat create data
app.post("/api/courses", (req, res) => {

    // const schema = Joi.object({
    //     name: Joi.string().min(3).required() // tulis persyaratan supaya obj valid
    // });

    // const result = schema.validate(req.body);
    const {error} = validateCourse(req.body); //result.error

    //OBJECT DESTRUCTURE = mempersingkat var

    if(error) {
        //400 bad request
        return res.status(400).send(error.details[0].message);
    }

    // console.log(result);
    
    //body dr req harus punya nama, kl g punya nama, reject
    //nama course, harus lebih dr 3 char
    //kedua persyaratan diatas harus terpenuhi
    // if(!req.body.name || req.body.name.length < 3) {
    //     return res.status(400).send('Error 400. Name is required and should be minimum 3 characters.');
    //     // return;
    // }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//WEB SERVICE BUAT UPDATE 1 COURSE BASED ON ID
app.put('/api/courses/:id', (req, res) => {
    //cari course, kl g ketemu, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Error 404. The course with the given ID was not found.');

    //validasi, kl g cocok, return 400
    const {error} = validateCourse(req.body); //result.error
    if(error) {
        //400 bad request
        return res.status(400).send(error.details[0].message);
    }

    //kl semua sesuai dgn syarat, update course,  return object course yg baru setelah update
    course.name = req.body.name;
    res.send(course);
});

//WEB SERVICE UTK DELETE 1 COURSE BASED ON ID
app.delete('/api/courses/:id', (req, res) => {

    //cari course nya, kl g ketemu, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Error 404. The course with the given ID was not found.');

    //delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //return course yg berhasil dihapus
    res.send(course);
});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required() // tulis persyaratan supaya obj valid
    });
    
    return schema.validate(course);
}

const port = process.env.port || 3000;

app.listen(port, function(){
    console.log(`Listening to port ${port}...`);
});