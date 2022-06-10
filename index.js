"use strict"
const express = require('express');
const  path = require('path');
const app = express(); // ejecucion inmediata

app.use("/static",express.static(path.resolve(__dirname,"src","static")));
// app.get('/*',controller.index);
app.get('/*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,"src","index.html"))
});

// console.log(path.join(__dirname,"/src/static/js/index.js"));

// const routes = require('./src/routes/index.routes')
// const controller = require('./src/controllers/index.controller');
// 

// app.set('view engine', 'pug');
// app.set('views',path.join(__dirname,'src/pages'));


// app.use(express.static(path.join(__dirname,'/public'))); // for error 404
// app.use(express.static(path.join(__dirname))); //for index page

// module.exports = (app)=>{
//     // app.use(express.static(path.join(__dirname,'src/controllers'))); //for index page

//     app.get('*',(req, res)=>{
//         res.sendFile(path.join(__dirname,'/public/404.html'));
//     });

// }


//page not found
const port = process.env.PORT || 3000 //3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`))

module.exports = app;