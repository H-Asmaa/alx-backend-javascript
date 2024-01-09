#!/usr/bin/node
export default function getListStudentIds(list) {
  const studentIds = [];
  if (Array.isArray(list)) {
    Object.keys(list).forEach(((key) => {
      studentIds.push(list[key].id);
    }));
  }
  return studentIds;
}
