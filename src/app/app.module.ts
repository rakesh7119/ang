import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employees/employees.component';
import { EmployeeTrainingComponent } from './component/employees-training/employees-training.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeTrainingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
