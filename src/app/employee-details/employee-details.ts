import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ApiEmployee } from '../api-employee';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails implements OnInit {

  employee = signal<ApiEmployee | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('ROUTE ID:', id);

    if (!id) {
      return;
    }

    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        console.log('API DATA:', data);

        this.employee.set(data);

        console.log('EMPLOYEE ASSIGNED:', this.employee());
      },
      error: (error) => {
        console.error('API ERROR:', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}