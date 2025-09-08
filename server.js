// Now we use ExpressJs instandof using NodeJs
// Step-1 : install the express http is already in there that is build in method but express is third party librery
// Step-2 : import the express module
const express = require('express');

// Create the express application
const app = express();

// Define routes
app.get('/',(req,res)=>{
  res.json({message:"Hello Express"})
})

// Start the server on port 3001
app.listen(3001,"localhost",()=>{
  // This is the listening listner function
  console.log("Server is running at http://localhost:3001")
})