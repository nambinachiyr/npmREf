// Modify tthe code like Common js
// We don't want import files that in .mjs
const http = require("node:http")

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{"message":"hi","name":"nambi"}');
});

// starts a simple http server locally on port 3000
server.listen(3001, 'localhost', () => {
  console.log('Listening on http://localhost:3001');
});

// run with `node server.mjs`
