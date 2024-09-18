export class Employee {
  id: number = 0;  // Initializing with 0 or another default value
  name: string;
  department: string;
  salary: number;
trainings: any;

  constructor() {
    this.id = 0;  // Or any other logic for initialization
    this.name = '';
    this.department = '';
    this.salary = 0;
  }
}
