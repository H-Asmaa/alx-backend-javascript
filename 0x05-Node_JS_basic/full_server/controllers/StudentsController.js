#!/usr/bin/node
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];
    readDatabase(path)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error.message);
        process.exit(1);
      });
    return response.status(200).send('Under construction.');
  }

  static getAllStudentsByMajor(request, response) {
    return response.status(200).send('Under construction.');
  }
}

module.exports = StudentsController;
