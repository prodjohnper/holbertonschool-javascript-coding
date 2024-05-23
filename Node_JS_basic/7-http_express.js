/*
  7-http_express.js

  HTTP server that returns a message upon a request using Express.
*/
const express = require('express');
// Import the Express module
const args = process.argv.slice(2); // Get the argument
const countStudents = require('./3-read_file_async');
// Import the countStudents function
const database = args[0]; // Get the database argument

// Create an instance of an Express app
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define /students endpoint
app.get('/students', async (req, res) => {
  // Get the database argument
  const msg = 'This is the list of our students\n';

  // Check if the database argument is not passed
  try {
    // Get the students from the database
    const students = await countStudents(database);
    // Send the response
    res.send(`${msg}${students.join('\n')}`);
    // If error occurs
  } catch (error) {
    // Send the response
    res.send(`${msg}${error.message}`);
  }
});

// Set server's port
app.listen(1245, () => {
  // Log the server's port
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
