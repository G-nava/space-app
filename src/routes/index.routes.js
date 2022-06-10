const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.index);

router.get('/posts',controller.posts );

router.get('/static', controller.static);

router.get('*', controller.errorFile);

// module.exports = router