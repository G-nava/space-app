"use strict"
const express = require('express');
const  path = require('path');
const app = express(); // ejecucion inmediata
const routes = require('./src/routes/index.routes')
// 

// app.set('view engine', 'pug');
// app.set('views',path.join(__dirname,'src/pages'));


// app.use(require('./src/routes/index.routes'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(routes);



//page not found

// app.get('*',function(req, res){
//     res.sendFile(path.join(__dirname,'/public/404.html'));
// });

const port = process.env.PORT || 3000 //3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`))
// app.listen(port);