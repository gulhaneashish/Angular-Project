import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { ApiEmployee } from '../api-employee';
import { EmployeeService } from '../employee.service';
import { Highlight } from '../highlight';
import { CapitalizePipe } from '../capitalize-pipe';
import { FilterPipe } from '../filter-pipe';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Highlight,
    CapitalizePipe,
    FilterPipe
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees: Employee[] = [];
  apiEmployees: ApiEmployee[] = [];

  searchText = '';

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getLocalEmployees();
    this.loadApiEmployees();
  }

  loadApiEmployees(): void {
     console.log('Calling API...');
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.apiEmployees = data;
      },
      error: (error) => {
        console.error('Failed to load API employees:', error);
      }
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getLocalEmployees();
  }

  trackById(index: number, employee: Employee): number {
    return employee.id;
  }
}