/**
  0-console.js

  Function that prints in `STDOUT` the str argument.
*/
const process = require('process');

function displayMessage(message) {
  if (!message) {
    // If the str argument is not provided, throw an error
    throw new Error('The string argument is required');
  }
  // Print the message in the `STDOUT`
  process.stdout.write(message);
}
// Export the function to be used in other files
module.exports = displayMessage;
