#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv[3];

if (!filePath) {
  console.error('Please provide a file path');
  process.exit(1);
}

if (!content) {
  console.error('Please provide content to write');
  process.exit(1);
}

// Write the content to the file
fs.writeFile(filePath, content, 'utf-8', (err) => {
  // If an error occurred, show it and return
  if (err) {
    console.error(err);
  }
});
