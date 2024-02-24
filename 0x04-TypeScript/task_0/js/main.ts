
interface Student{
	firstname: string;
	lastName: string;
	age: number;
	location: string;
}

const student_1: Student = {
	firstname: "Jey",
	lastName: "Harvey",
	age: 21,
	location: "Panama"
}

const student_2: Student = {
	firstname: "Ahmed",
	lastName: "malek",
	age: 29,
	location: "Morocco"
}

const studentsList: Student[] = [
	student_1,
	student_2
]

function renderTable(){
	const table: HTMLTableElement = document.createElement('table');
	studentsList.forEach(student => {
		const row: HTMLTableRowElement = table.insertRow();
		const cell1: HTMLTableCellElement = row.insertCell();
		const text1: Text = document.createTextNode(student.firstname);
		cell1.appendChild(text1)

		const cell2: HTMLTableCellElement = row.insertCell();
		const text2: Text = document.createTextNode(student.location);
		cell2.appendChild(text2);
	});
	document.body.appendChild(table);
}

renderTable();
