const notes = require('./data')
const controler = {
    getAllTodos:async(req,res)=>{
      try{
        res.json(notes)
      }
      catch{
        res.status(500).json({message:"Todo not Fetching"})
      }
    },
    getTodoById:async(req,res)=>{
      try{
        const todoId = req.params.id
        const todo = notes.find(todo=>todo.id===todoId)
        if(todo){
          res.json(todo)
        }
        else{
          res.status(404).json({message:`Todo id - ${todoId} is not in there`})
        }
        // console.log(todoId)
      }
      catch{
        res.status(500).json({message:"Todo is not found"})
      }
    },
}
module.exports = controler;