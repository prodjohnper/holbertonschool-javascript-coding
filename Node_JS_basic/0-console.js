/**
  0-console.js

  Function that prints in `STDOUT` the str argument.
*/

const displayMessage = (string) => {
  if (!string) {
    // If the str argument is not provided, throw an error
    throw new Error('The string argument is required');
  }
  // Print the message in the `STDOUT`
  console.log(string);
};
// Export the function to be used in other files
module.exports = displayMessage;
