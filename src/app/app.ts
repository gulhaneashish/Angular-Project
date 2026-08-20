import { Component } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // employees: Employee[] = [
  //   {
  //     id: 1,
  //     name: 'rahul sharma',
  //     email: 'rahul@gmail.com',
  //     age: 25,
  //     department: 'Development',
  //     status: true   
  //   },
  //   {
  //     id: 2,
  //     name: 'Priya Patil',
  //     email: 'priya@gmail.com',
  //     age: 24,
  //     department: 'Testing',
  //     status: false
  //   }
  // ];

  // addEmployee(employee: Employee) {
  //   this.employees.push(employee);
  // }

  // deleteEmployee(id: number) {
  //   this.employees = this.employees.filter(
  //     employee => employee.id !== id
  //   );
  // }
}