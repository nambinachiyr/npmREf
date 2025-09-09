// Create Express
const express = require('express');
const { getAllTodos, getTodoById, createNewTodo, updateTodo } = require('./controler');

//  Create Router Object
const router = express.Router();
// Router routes define

router.get('/',getAllTodos)
router.get('/:id',getTodoById)
router.post('/',createNewTodo)
router.put('/:id',updateTodo)
// router.get('/todos/:id',getTodoById)

module.exports = router;