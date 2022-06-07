const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');


router.get('/',controller.index);

// router.get('*', function(req, res){
//     res.sendFile('404.html');
// });

module.exports = router