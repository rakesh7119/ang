import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employee: Employee = new Employee();
  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService, private router: Router, private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(data => {
      this.router.navigate(['/employees']);
    });
  }

  onSubmit() {
    this.saveEmployee();
  }
}
