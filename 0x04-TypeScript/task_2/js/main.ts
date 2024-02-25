// This file contains three tasks.
// 5. Advanced types Part 1
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return 'Working from home';
	}
	getCoffeeBreak() {
		return 'Getting a coffee break';
	}
	workDirectorTasks() {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return 'Cannot work from home';
	}
	getCoffeeBreak() {
		return 'Cannot have a break';
	}
	workTeacherTasks() {
		return 'Getting to work';
	}
}


function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500){
		return new Teacher();
	}else{
		return new Director();
	}
}

//Testing...

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// 6. Creating functions specific to employees

function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
	return isDirector(employee)
	  ? (employee as Director).workDirectorTasks()
	  : (employee as Teacher).workTeacherTasks();
}

// Testing...

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// 7. String literal types

type Subjects = 'Math' | 'History'

function teachClass(todayClass: Subjects) : string {
	if (todayClass === 'Math'){
		return 'Teaching Math';
	}else{
		return 'Teaching History';
	}
}

// Testing...

console.log(teachClass('Math'));
console.log(teachClass('History'));
