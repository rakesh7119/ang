import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from './training-details/training.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private baseUrl = 'http://localhost:8080/api/trainings'; // Backend URL

  constructor(private http: HttpClient) {}

  // Fetch training details by employee ID
  getTrainingsByEmployeeId(employeeId: number): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.baseUrl}/employee/${employeeId}`);
  }
}
