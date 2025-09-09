// Create Express
const express = require('express');
const { getAllTodos, getTodoById, createNewTodo } = require('./controler');

//  Create Router Object
const router = express.Router();
// Router routes define

router.get('/',getAllTodos)
router.get('/:id',getTodoById)
router.post('/',createNewTodo)
// router.get('/todos/:id',getTodoById)

module.exports = router;