#!/usr/bin/node
export default function getStudentsByLocation(list, city) {
  let studentByCity = [];
  if (Array.isArray(list)) {
    studentByCity = list.filter((student) => student.location === city);
  }
  return studentByCity;
}
