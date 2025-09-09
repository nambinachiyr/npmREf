// Create Express
const express = require('express');
const { getAllTodos, getTodoById } = require('./controler');

//  Create Router Object
const router = express.Router();
// Router routes define
router.get('/todoApp',getAllTodos)
router.get('/todoApp/:id',getTodoById)
// router.get('/todos/:id',getTodoById)

module.exports = router;