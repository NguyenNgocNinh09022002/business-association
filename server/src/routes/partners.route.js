const express = require('express');
const router = express.Router();

const partnersController = require('../controller/PartnersController')

router.get('/',partnersController.index)

module.exports = router;