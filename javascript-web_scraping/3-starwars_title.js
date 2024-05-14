#!/usr/bin/node

// Import the request library
const request = require('request');

// Get the movie ID from the command line arguments
const movieID = process.argv[2];
const url = `https://swapi.dev/api/films/${movieID}`;

if (!movieID) {
  console.error('Please provide a movie ID');
  process.exit(1);
}

// Make a request to the Star Wars API with the movie ID
request(url, (err, response) => {
  // If there is an error, log the error message and exit the process
  if (err) {
    console.error(err.message);
    process.exit(1);
  } else {
    // If the request is successful, parse the response body and log the movie title
    const data = JSON.parse(response.body);
    console.log(data.title);
  }
});
