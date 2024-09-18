import { Component, Input, OnInit } from '@angular/core';
import { EmployeeTrainingService } from 'src/app/service/employees-training.service';

@Component({
  selector: 'app-employee-training',
  templateUrl: './employees-training.component.html',
  styleUrls: ['./employees-training.component.css']
})
export class EmployeeTrainingComponent implements OnInit {
  @Input() employeeId!: string;
  trainingData: any[] = [];

  constructor(private trainingService: EmployeeTrainingService) { }

  ngOnInit(): void {
    this.loadTrainingData();
  }

  loadTrainingData(): void {
    this.trainingService.getTrainingByEmployeeId(this.employeeId).subscribe((data: any) => {
      this.trainingData = data;
    });
  }
}
