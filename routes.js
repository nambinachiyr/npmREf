// Create Express
const express = require('express');
//  Create Router Object
const router = express.Router();
// Router routes define
router.get('/',(req,res)=>{
    res.json({message:"hello, Router!"})
})
module.exports = router;