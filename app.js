// To Create Express
const express = require('express');
const router = require('./routes');
// Need to import body-parser after install
const bodyParser = require("body-parser")

// Create the express application
const app = express();
//1. This is oneway to fectch the data's body
// app.use(express.json())
// 2.second way we need to go thrid party library "body-parser" so install and run
 app.use(bodyParser.json())
app.use('/',router)
module.exports = app;