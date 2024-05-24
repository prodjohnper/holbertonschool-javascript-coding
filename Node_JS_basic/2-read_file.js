/*
  2-read_file.js

  Function that counts the number of students in a
  database and prints the number of students per field.
*/

// Import the filesystem module
const fs = require('fs');

// Function that counts the number of students in a database
const countStudents = (filePath) => {
  try {
    // Read the file content, and split it by lines
    const data = fs.readFileSync(filePath, 'utf8');
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
        `Number of students in ${field}: ${count}. List: ${students.join(', ')}`,
      );
    });
  } catch (err) {
    // If an error occurs, print it and exit
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
