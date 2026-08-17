import { Component } from '@angular/core';
import { Header } from './header/header';
import { Home } from './home/home';
import { EmployeeForm} from './employee-form/employee-form';
import { EmployeeList } from './employee-list/employee-list';
import{ Footer} from './footer/footer';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Home,
    EmployeeForm,
    EmployeeList,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      age: 25,
      department: 'Development'
    },
    {
      id: 2,
      name: 'Priya Patil',
      email: 'priya@gmail.com',
      age: 24,
      department: 'Testing'
    }
  ];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(
      employee => employee.id !== id
    );
  }
}