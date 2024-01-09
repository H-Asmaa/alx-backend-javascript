#!/usr/bin/node
export default function getStudentIdsSum(list) {
  const studentIds = list.map((student) => student.id);
  const sumIds = studentIds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sumIds;
}
