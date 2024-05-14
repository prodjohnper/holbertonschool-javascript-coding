#!/usr/bin/node

// Import the request module
const request = require('request');
const fs = require('fs');

// Get the API URL and file name from the command line args
const apiUrl = process.argv[2];
const fileName = process.argv[3];

// Check if the API URL and file name are provided
if (!apiUrl) {
  console.error('Please provide a valid API URL');
}

// Check if the file name is provided
if (!fileName) {
  console.error('Please provide a file name');
}

// Make a request to the API
request(apiUrl, (err, response, body) => {
  // Check if there is an error
  if (err) {
    // Print the error
    console.error(err);
  } else {
    // Write the response to a file
    fs.writeFile(fileName, body, 'utf-8', (err) => {
      if (err) {
        // Print the error
        console.error(err.message);
      }
      // Print that the file was saved
      console.log('File saved');
    });
  }
});
