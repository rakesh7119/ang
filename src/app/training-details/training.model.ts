export class Training {
  id: number = 0;  // Initializing with 0 or another default value
  employeeId: number = 0;
  courseName: string;
  courseCode: string;
  score: number;
  hoursSpent: number;
  dateCompleted: Date;
  status: string;

  constructor() {
    this.id = 0;  // Or any other logic for initialization
    this.employeeId = 0;
    this.courseName = '';
    this.courseCode = '';
    this.score = 0;
    this.hoursSpent = 0;
    this.dateCompleted = new Date();
    this.status = '';
  }
}
