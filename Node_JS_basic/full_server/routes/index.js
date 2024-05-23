/*
  index.js

  Routing file that contains the routing configuration.
*/
// Import the express module and the controllers.
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// Define the controllerRouting function
function controllerRouting(app) {
  // Create an instance of an Express router
  const router = express.Router();
  app.use('/', router);
  // Define the routes
  router.get('/', (req, res) => {
    // Call the getHomepage function from the AppController
    AppController.getHomepage(req, res);
  });

  router.get('/students', (req, res) => {
    // Call the getAllStudents function from the StudentsController
    StudentsController.getAllStudents(req, res, process.argv[2]);
  });

  router.get('/students/:major', (req, res) => {
    // Call the getAllStudentsByMajor function from the StudentsController
    StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
  });
}

// Export the controllerRouting function
export default controllerRouting;
