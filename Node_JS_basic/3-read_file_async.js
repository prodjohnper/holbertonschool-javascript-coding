/*
  3-read_file_async.js

  Function that accepts a path to a csv file and returns a
  promise that reads the file and resolves with an array of
  students.
*/

// Import the filesystem module
const fs = require('fs');

function countStudents(path) {
  // Return a promise
  return new Promise((resolve, reject) => {
    // Read the file
    fs.readFile(path,
      { encoding: 'utf8', flag: 'r' },
      (err, data) => {
        // If the file does not exist or cannot be read return an error
        if (err) {
          // Reject the promise
          reject(Error('Cannot load the database'));
          return;
        }
        // Split the data by new line
        const response = [];
        let message;

        // Remove the last line (empty line) and split the data by commas
        const content = data.split('\n');
        let students = content.filter((item) => item);
        students = students.map((item) => item.split(','));

        // Get the number of students and the fields they are in
        const studentSize = students.length ? students.length - 1 : 0;
        message = `Number of students: ${studentSize}`;
        console.log(message);

        // Add the message to the response
        response.push(message);

        // Create an obj to store the fields and the students in each field
        const fields = {};
        for (const i in students) {
          // Skip the first line
          if (i !== 0) {
            // If the field does not exist, create it
            if (!fields[students[i][3]]) fields[students[i][3]] = [];
            fields[students[i][3]].push(students[i][0]);
          }
        }

        // Remove the field key from the obj
        delete fields.field;

        // Get the number of students in each field
        for (const key of Object.keys(fields)) {
          // Get the number of students in each field
          message = `Number of students in ${key}: ${fields[key].length
          }. List: ${fields[key].join(', ')}`;

          console.log(message);

          response.push(message);
        }
        // Resolve the promise
        resolve(response);
      });
  });
}

module.exports = countStudents;
