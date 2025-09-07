// Modify tthe code like Common js
// We don't want import files that in .mjs
const http = require("node:http")

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Created Node and nodemon dev Its Work in vsCode ! hi node');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
