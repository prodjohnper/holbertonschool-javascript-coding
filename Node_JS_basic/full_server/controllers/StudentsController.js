/*
  StudentsController.js

  Controller file that contains the functions to handle the students routes.
*/
// Import the readDatabase function
import readDatabase from '../utils';

// Define the StudentsController class
class StudentsController {
  // Define the getAllStudents function
  static getAllStudents(request, response, database) {
    // Call the readdatabase function with the database path
    readDatabase(database)
      .then((fields) => {
        // Create an array to store the students
        const students = [];
        // Create a variable to store the message
        let msg;
        // Add the message to the students array
        students.push('This is the list of our students');

        // Iterate over the fields object
        for (const key of Object.keys(fields)) {
          // Create the message
          msg = `Number of students in ${key}: ${fields[key].length
          }. List: ${fields[key].join(', ')}`;
          // Add the message to the students array
          students.push(msg);
        }
        // Send the response
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        // Send an error response
        response.send(500, 'Cannot load the database');
      });
  }

  // Define the getAllStudentsByMajor function
  static getAllStudentsByMajor(request, response, database) {
    // Get the major parameter
    const { major } = request.params;
    // Check if the major is CS or SWE
    if (major !== 'CS' && major !== 'SWE') {
      // Send an error response
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      // Call the readdatabase function with the database path
      readDatabase(database)
        .then((fields) => {
          // Get the students of the major and send the response
          const students = fields[major];
          response.send(200, `List: ${students.join(', ')}`);
        })
        // Send an error response
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}
// Export the StudentsController class
export default StudentsController;
