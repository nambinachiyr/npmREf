// Create Express
const express = require('express');
const { index } = require('./controler');
//  Create Router Object
const router = express.Router();
// Router routes define
router.get('/',index)
module.exports = router;