/*
  2-read_file.js

  Function that counts the number of students in a
  database and prints the number of students per field.
*/

// Import the filesystem module
const fs = require('fs');

const countStudents = (path) => {
  // Read the file
  let data;
  try {
    // Read the file and store the content in data
    data = fs.readFileSync(path,
      { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    // If the file does not exist or cannot be read
    throw new Error('Cannot load the database');
  }

  // Split the data by new line
  data = data.split('\n');

  // Remove the last line (empty line) and split the data by commas
  let students = data.filter((student) => student);
  students = students.map((item) => item.split(','));

  // Get the number of students and the fields they are in
  const studentSize = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${studentSize}`);

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

  for (const key of Object.keys(fields)) {
    // Get the number of students in each field
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
};

module.exports = countStudents;
