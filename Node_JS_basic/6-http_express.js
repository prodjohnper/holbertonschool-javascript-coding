/*
  6-http_express.js

  HTTP server that returns a message upon a request using Express.
*/
// Import the Express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define root endpoint
app.get('/', (req, res) => {
  // Send the response
  res.send('Hello Holberton School!');
});

// Set server's port
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
