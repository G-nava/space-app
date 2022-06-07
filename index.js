"use strict"
var express = require('express');
var app = express(); // ejecucion inmediata
const path = require('path')
// const routes = require('./src/routes/index.routes')

// app.use(express.json()); // middleware

app.use(require('./src/routes/index.routes'));
// console.log(__dirname);

//page not found
app.use(express.static(path.join(__dirname,'/public')));
app.get('*',function(req, res){
    res.sendFile(path.join(__dirname,'/public/404.html'));
});


// console.log(__dirname);
// const courses = [
//     {id:1, name:'nameA'},
//     {id:2, name:'nameB'},
//     {id:3, name:'nameC'}
// // const content = document.getElementById('main-section')
// ]

// app.get('/', (req, res)=>res.send('Hello there'));

// app.get('/api/post/:year/:month',(req, res)=>{
//     res.send(req.params);
// });

// app.get('/api/courses',(req, res)=>{
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     // res.send(courses);
// });

// //POST
// app.post('/api/courses',(req, res)=>{
//     res.send(courses);
// });

// app.get('/api/courses/:id',(req, res)=>{
//     const course = courses.find(c=>c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('ID no encontrada')
//     res.send(course);
// });



const port = process.env.PORT || 3000 //3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`))