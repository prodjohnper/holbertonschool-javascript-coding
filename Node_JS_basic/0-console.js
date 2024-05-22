/*
  0-console.js

  Function that prints in `STDOUT` the str argument.
*/

module.exports = function displayMessage(str) {
  if (!str) {
    // If the str argument is not provided, throw an error
    throw new Error('The string argument is required');
  }
  // Print the message in the `STDOUT`
  console.log(str);
};
