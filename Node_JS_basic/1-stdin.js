/*
  1-stdin.js

  Program that executes through command line and waits for user input.
*/
const process = require('process');

// Display welcome msg
console.log('Welcome to Holberton School, what is your name?');

// Get the user's input
process.stdin.on('data', (input) => {
  // Trim whitespaces or newlines
  const name = input.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Display the closing message and exit the program
  console.log('This important software is now closing');
  process.exit();
});
