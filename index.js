/*
 * Primary file for API
 *
 */

// Dependencies
const http = require('http');
const url = require('url');

// Server will respond to all requests with a string
const server = http.createServer((req, res) => {

  // Get URL and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get URL path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method.toLowerCase();

  // Send the response
  res.end('Hello there\n');

  // Log the return path
  console.log('Request received on path: ' + trimmedPath + ' with this method: ' + method + ' and with these query string params', queryStringObject);
});

// Start server and have it listen on port 3000
server.listen(3000, () => {
  console.log('Listening on port 3000');
});