/*
  4-http.js

  Function that creates a server that listens on port
  1245 and returns a message depending on the request.
*/

// Import the HTTP module
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response HTTP header
  res.writeHead(200);
  // Send the response body
  res.end('Hello Holberton School!');
});

// Set server's port
app.listen(1245, () => {
  // Log the server's port
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
