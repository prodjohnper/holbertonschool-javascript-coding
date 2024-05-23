/*
  utils.js

  This file contains a function that reads a database
  file and returns a promise with the data.
*/

// Import the filesystem module
const fs = require('fs');

// Function that reads a database file and returns a promise with the data
export default function readDatabase(path) {
  // Return a promise
  return new Promise((resolve, reject) => {
    // Read the file
    fs.readFile(path, 'utf8', (err, data) => {
      // If there is an error, reject the promise
      if (err) {
        reject(Error(err));
        return;
      }
      // Split the data into an array of lines and remove empty lines
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      // Split each line into an array of fields
      students = students.map((item) => item.split(','));

      // Create an pbj with the fields as keys and an array of students as values
      const fields = {};
      // Iterate over the students array
      for (const i in students) {
        // If the index is not 0, add the student to the corresponding field
        if (i !== 0) {
          // If the field does not exist, create it
          if (!fields[students[i][3]]) fields[students[i][3]] = [];
          // Add the student to the field
          fields[students[i][3]].push(students[i][0]);
        }
      }
      // Remove the field field and resolve the promise
      delete fields.field;
      resolve(fields);
    });
  });
}
