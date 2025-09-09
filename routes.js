// Create Express
const express = require('express');
const { getAllTodos } = require('./controler');

//  Create Router Object
const router = express.Router();
// Router routes define
router.get('/todos',getAllTodos)
// router.get('/todos/:id',getTodoById)

module.exports = router;