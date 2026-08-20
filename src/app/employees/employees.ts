import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ApiEmployee } from '../api-employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {

  employees: ApiEmployee[] = [];
  errorMessage = '';

  constructor(
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.message;
        this.cdr.detectChanges();
      }
    });
  }
}