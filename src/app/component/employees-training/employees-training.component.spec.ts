import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTrainingComponent } from './employees-training.component';

describe('EmployeesTrainingComponent', () => {
  let component: EmployeesTrainingComponent;
  let fixture: ComponentFixture<EmployeesTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesTrainingComponent]
    });
    fixture = TestBed.createComponent(EmployeesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
