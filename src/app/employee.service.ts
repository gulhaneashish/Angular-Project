import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee } from './employee';
import { ApiEmployee } from './api-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<ApiEmployee[]> {
    return this.http.get<ApiEmployee[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Employee API error:', error);
        return throwError(() => new Error('Unable to fetch employees'));
      })
    );
  }

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

  getLocalEmployees(): Employee[] {
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