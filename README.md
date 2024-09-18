<!-- Add Bootstrap CSS link in your index.html file -->
<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->

<div class="container mt-4">
  <h1 class="mb-4">Employee Management</h1>

  <!-- Search Bar -->
  <div class="mb-3">
    <input type="text" class="form-control" placeholder="Search employees..." [(ngModel)]="searchText">
  </div>

  <!-- Employee Table -->
  <table class="table table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let employee of employees | filter: searchText; let i = index">
        <td>{{ i + 1 }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.email }}</td>
        <td>{{ employee.department }}</td>
        <td>
          <button class="btn btn-info btn-sm mr-2" (click)="viewDetails(employee.id)">View</button>
          <button class="btn btn-warning btn-sm" (click)="editEmployee(employee.id)">Edit</button>
        </td>
      </tr>
      <tr *ngIf="employees.length === 0">
        <td colspan="5" class="text-center">No employees found.</td>
      </tr>
    </tbody>
  </table>

  <!-- Pagination Controls -->
  <nav *ngIf="employees.length > 0">
    <ul class="pagination justify-content-center">
      <li class="page-item" [class.disabled]="currentPage === 1">
        <a class="page-link" (click)="changePage(currentPage - 1)">Previous</a>
      </li>
      <li class="page-item" *ngFor="let page of pages" [class.active]="currentPage === page">
        <a class="page-link" (click)="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" [class.disabled]="currentPage === totalPages">
        <a class="page-link" (click)="changePage(currentPage + 1)">Next</a>
      </li>
    </ul>
  </nav>
</div>

<!-- Add Filter Pipe -->
<ng-template #filter let-items="items" let-search="search">
  <ng-container *ngFor="let item of items">
    <ng-container *ngIf="item.name.toLowerCase().includes(search.toLowerCase()) || 
                         item.email.toLowerCase().includes(search.toLowerCase())">
      <ng-content></ng-content>
    </ng-container>
  </ng-container>
</ng-template>







import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: any[] = [];
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  pages: number[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
      this.totalPages = Math.ceil(this.employees.length / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    });
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Implement pagination logic here if needed
    }
  }

  viewDetails(employeeId: number): void {
    // Implement view details logic
  }

  editEmployee(employeeId: number): void {
    // Implement edit employee logic
  }
}




.table {
  margin-top: 20px;
}

.pagination {
  margin-top: 20px;
}

.pagination .page-item.disabled .page-link {
  pointer-events: none;
  cursor: default;
}

.page-link {
  cursor: pointer;
}
