export default function createIteratorObject(report) {
  const employeesList = [];
  for (const dep of Object.values(report.allEmployees)) {
    for (const employeeName of dep) employeesList.push(employeeName);
  }
  return employeesList;
}
