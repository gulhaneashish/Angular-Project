import { Component } from '@angular/core';

import { EmployeeList } from '../employee-list/employee-list';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    EmployeeList
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees {
}