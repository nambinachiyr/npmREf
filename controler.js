const notes = require('./data')
const controler = {
    getAllTodos:(req,res)=>{
      res.json(notes)
    },
    getTodoById:async(req,res)=>{
      try{
        const todoId = req.params.id
        const todo = notes.find(todo=>todo.id===todoId)
        res.json(todo)
        // console.log(todoId)
      }
      catch{
        res.status(500).json({message:"Todo is not found"})
      }
    },
}
module.exports = controler;