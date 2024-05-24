/*
  3-read_file_async.js

  Function that accepts a path to a csv file and returns a
  promise that reads the file and resolves with an array of
  students.
*/

// Import the filesystem module
const fs = require('fs').promises;

// Function that counts the number of students in a database
const countStudents = (filePath) => new Promise((resolve, reject) => {
  // Read the file content, and split it by lines
  fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');
      // Print the number of students
      console.log(`Number of students: ${students.length}`);

      // Create an object to store the number of students per field
      const fields = {};
      students.forEach((student) => {
        // Split the student by commas
        const [firstName, , , field] = student.split(',');
        if (fields[field]) {
          // If the field already exists, increment the count
          fields[field].count += 1;
          fields[field].students.push(firstName);
        } else {
          // If the field does not exist, create it
          fields[field] = {
            count: 1,
            students: [firstName],
          };
        }
      });

      // Print the number of students per field
      Object.entries(fields).forEach(([field, { count, students }]) => {
        console.log(
          `Number of students in ${field}: ${count}. List: ${students.join(
            ', ',
          )}`,
        );
      });

      // Resolve the promise
      resolve();
    })
    .catch((err) => {
      // If an error occurs, reject the promise with the error
      if (err.code === 'ENOENT') {
        reject(new Error('Cannot load the database'));
      } else {
        reject(err);
      }
    });
});

module.exports = countStudents;
