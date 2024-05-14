#!/usr/bin/node

// Import the request library
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}`;

if (!movieId) {
  console.error('Please provide a movie ID');
  process.exit(1);
}

// Make a request to the URL and get the movie title
request(url, (err, response) => {
  if (err) {
    // Print the error if one occurred
    console.error('Error:', err.message);
  } else {
    // Print the movie title
    const movie = JSON.parse(response.body);
    console.log(movie.title);
  }
});
