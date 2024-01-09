#!/usr/bin/node
export default function getListStudentIds(list) {
  const studentIds = [];
  if (Array.isArray(list)) {
    list.map((student) => {
      if ('id' in student) {
        studentIds.push(student.id);
      }
      return 1;
    });
  }
  return studentIds;
}
