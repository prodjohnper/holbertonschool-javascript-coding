#!/usr/bin/node

// Import the request library
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

if (!movieId) {
  console.error('Please provide a movie ID');
  process.exit(1);
}

// Make a request to the URL and get the movie title
request(apiUrl, (err, response, body) => {
  if (err) {
    // Print the error if one occurred
    console.error('Error:', err);
    return;
  }

  // Parse the JSON response
  try {
    const movie = JSON.parse(body);
    // Print the movie title
    console.log(movie.title);
  } catch (parseError) {
    // Print an error if the JSON parsing fails
    console.error('Error parsing JSON:', parseError);
  }
});
