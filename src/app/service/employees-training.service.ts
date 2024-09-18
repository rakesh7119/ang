import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTrainingService {
  private apiUrl = 'http://localhost:8081/api/training';  // Backend Training Service URL

  constructor(private http: HttpClient) { }

  getTrainingByEmployeeId(employeeId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/employee/${employeeId}`);
  }
}
