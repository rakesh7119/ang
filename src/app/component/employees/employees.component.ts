import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  updateEmployee(employeeId: string, updatedData: any): void {
    this.employeeService.updateEmployee(employeeId, updatedData).subscribe(response => {
      console.log('Employee updated', response);
    });
  }
}
