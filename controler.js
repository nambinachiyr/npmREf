const notes = require('./data')
const controler = {
    getAllTodos:(req,res)=>{
      res.json(notes)
    },
    // getTodoById:(req,res)=>{
    //     const id = res.id
    // }
}
module.exports = controler