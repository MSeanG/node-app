/*
 * Primary file for API
 *
 */

// Dependencies
const http = require('http');

// Server will respond to all requests with a string
const server = http.createServer((req, res) => {
  res.end('Hello there\n');
});

// Start server and have it listen on port 3000
server.listen(3000, () => {
  console.log('Listening on port 3000');
});