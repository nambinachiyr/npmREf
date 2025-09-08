const controler = {
    index:(req,res)=>{
      res.json({message:"hello, Controller!"})
    },
    postIndex:(req,res)=>{
        res.json({message:"This is Post request"})
    }
}
module.exports = {
    index:controler.index,
    postIndex:controler.postIndex
}