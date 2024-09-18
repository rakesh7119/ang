import { TestBed } from '@angular/core/testing';

import { EmployeesTrainingService } from './employees-training.service';

describe('EmployeesTrainingService', () => {
  let service: EmployeesTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
