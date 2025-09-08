const app = require("./app")

// To split the file in two file
app.listen(3001,"localhost",()=>{
  // This is the listening listner function
  console.log("Server is running at http://localhost:3001")
})