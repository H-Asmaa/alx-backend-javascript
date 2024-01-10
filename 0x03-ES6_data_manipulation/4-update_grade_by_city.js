#!/usr/bin/node
export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((student) => student.location === city)
    .map((studentObj) => {
      const matchingGrade = newGrades.find((sGrades) => studentObj.id === sGrades.studentId);
      const NewStudent = studentObj;
      if (matchingGrade) {
        NewStudent.grade = matchingGrade.grade;
        return NewStudent;
      }
      NewStudent.grade = 'N/A';

      return studentObj;
    })
    .filter(Boolean);
}
