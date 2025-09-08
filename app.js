// To Create Express
const express = require('express');
const router = require('./routes');

// Create the express application
const app = express();

app.use('/',router)
module.exports = app;