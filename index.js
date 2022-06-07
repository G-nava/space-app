"use strict"
const express = require('express');
const app = express(); // ejecucion inmediata
const path = require('path')

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'src/pages'));

app.use(require('./src/routes/index.routes'));


//page not found
app.use(express.static(path.join(__dirname,'/public')));
app.get('*',function(req, res){
    res.sendFile(path.join(__dirname,'/public/404.html'));
});

const port = process.env.PORT || 3000 //3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`))