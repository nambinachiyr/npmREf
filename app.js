// To Create Express
const express = require('express');

// Create the express application
const app = express();

app.get('/',(req,res)=>{
    res.json({message:"hello, App!"})
})
module.exports = app;