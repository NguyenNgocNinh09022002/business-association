const express = require('express');
const router = express.Router();

const postController = require('../controller/PostsController')

router.get('/',postController.index)

module.exports = router;