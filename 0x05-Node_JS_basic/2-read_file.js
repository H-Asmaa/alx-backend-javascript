#!/usr/bin/node
/* The function countStudents  */
const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    let studentsList = data.split('\n');
    studentsList = studentsList.map((line) => line.split(',')).slice(1, -1);
    const csStudentsList = [];
    const sweStudentsList = [];
    for (const list of studentsList) {
      if (list[3] === 'CS') {
        csStudentsList.push(list[0]);
      } else {
        sweStudentsList.push(list[0]);
      }
    }
    const studentsCount = csStudentsList.length + sweStudentsList.length;
    console.log(`Number of students: ${studentsCount}`);
    console.log(`Number of students in CS: ${csStudentsList.length}. List: ${csStudentsList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudentsList.length}. List: ${sweStudentsList.join(', ')}`);
  });
};
module.exports = countStudents;
