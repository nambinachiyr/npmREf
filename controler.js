const controler = {
    index:(req,res)=>{
    res.json({message:"hello, Controller!"})
}
}
module.exports = {
    index:controler.index
}