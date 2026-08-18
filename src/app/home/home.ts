import { Component } from '@angular/core';
import {EmployeeForm} from '../employee-form/employee-form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EmployeeForm
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  title = 'Welcome to Employee Management System';

  description = 'Manage employees using Angular components, forms and directives.';
}

