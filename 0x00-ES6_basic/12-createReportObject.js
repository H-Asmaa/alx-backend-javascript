export default function createReportObject(employeesList) {
  const allEmployees = {
    allEmployees: employeesList,
    getNumberOfDepartments: (allEmployees) => Object.keys(allEmployees).length,
  };
  return allEmployees;
}
