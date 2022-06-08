const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.use('/static', controller.static)

router.get('/', controller.index);

router.get('/posts',controller.posts )

router.get('*', controller.errorFile)

module.exports = router