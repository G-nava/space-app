const path = require('path');
// const express = require('express');

const controller = {}

// index page
controller.index = (req, res)=>{
    res.sendFile(path.join(__dirname,'../../index.html'))
}

//infor page
controller.posts = (req, res)=>{
    res.send('posts...');
}

// not found page + redirect
controller.errorFile = (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/404.html'));
}

controller.static = (req, res)=>{
    res.render('static');
    // res.render(path.join(__dirname,'static.js'));
}
console.log(__dirname);

module.exports = controller; 