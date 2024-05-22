/*
  1-stdin.js

  Program that executes through command line and waits for user input.
*/

// Display welcome msg
console.log('Welcome to Holberton School, what is your name?');

// Get user input
process.stdin.on('readable', () => {
  // Read user input
  const input = process.stdin.read();
  // If data is not null, display user input
  if (input !== null) process.stdout.write(`Your name is: ${input.toString()}`);
});

// Display closing msg
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
