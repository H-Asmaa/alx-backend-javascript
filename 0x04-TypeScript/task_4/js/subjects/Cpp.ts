namespace Subjects {
	export interface Teacher {
		firstName: string;
		lastName: string;
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		getRequirements() {
			return 'Here is the list of requirements for Cpp';
		}
		getAvailableTeacher() {
			if (this.teacher.experienceTeachingC !== null) {
				return 'Available Teacher: ' + this.teacher;
			}else {
				return 'No available teacher';
			}
		}
	}
}

