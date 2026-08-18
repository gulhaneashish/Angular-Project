import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      id: 1,
      name: 'rahul sharma',
      email: 'rahul@gmail.com',
      age: 25,
      department: 'Development',
      status: true
    },
    {
      id: 2,
      name: 'priya patil',
      email: 'priya@gmail.com',
      age: 24,
      department: 'Testing',
      status: false
    }
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(
      employee => employee.id !== id
    );
  }
}