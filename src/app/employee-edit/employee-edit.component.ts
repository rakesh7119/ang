import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id!: number;
  employeeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data => {
      this.employeeForm.patchValue(data);
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employeeForm.value).subscribe(data => {
      this.router.navigate(['/employees']);
    });
  }

  onSubmit() {
    this.updateEmployee();
  }
}
