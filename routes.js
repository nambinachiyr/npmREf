// Create Express
const express = require('express');
const { index, postIndex } = require('./controler');
//  Create Router Object
const router = express.Router();
// Router routes define
router.get('/',index)
router.post('/',postIndex)
module.exports = router;