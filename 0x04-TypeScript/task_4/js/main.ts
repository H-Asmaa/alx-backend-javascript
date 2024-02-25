/// <reference path="./subjects/Subject.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher : Subjects.Teacher = {
	firstName: 'fatima',
	lastName: 'marboh',
	experienceTeachingC: 10
}

// For Cpp subject
console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("C++");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("C++");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
