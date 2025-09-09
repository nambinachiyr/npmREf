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
    createNewTodo:async(req,res)=>{
      try{
        // console.log(req.body)
        // Destructrue the contents 
        const {type,amount} = req.body
        console.log(amount)
        // Create new id
        const newID = parseInt(notes[notes.length-1].id)+1
        // console.log(newID)
        const createdAt = new Date().toISOString()
        // To create the object for comlelete to todo item
        const newTodo = {
          createdAt:createdAt,
          type:type,
          description:{},
          amount:amount,          
          id:newID.toString(),
        }
        // Push the newTodo
       notes.push(newTodo);
      //  Sent the successful response
      res.status(201).json({message:"Todo is creared suceessfully!",data:newTodo})
      }
      catch(err){
        res.status(500).json({message:"Error creating new todo item"})
      }
    }
}
module.exports = controler;