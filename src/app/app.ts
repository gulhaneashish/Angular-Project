import { Component, ViewChild } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { Header } from './header/header';
import { User } from './user';
import { UserCard } from './user-card/user-card';
import { Footer } from './footer/footer';
import { Employee } from './employee';
import { Card } from './card/card';
import { ViewContainerRef } from '@angular/core';
import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    UserCard,
    Card,
    Profile,
    Statistics
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;

  user: User | null = {
    id: 1,
    name: 'Ashish',
    email: 'ashish@gmail.com',
    age: 22
  };

  showProfile() {
    this.dynamicContainer.clear();

    this.dynamicContainer.createComponent(Profile);
  }

  showStatistics() {
    this.dynamicContainer.clear();

    this.dynamicContainer.createComponent(Statistics);
  }

  onDeleteUser(id: number) {
    console.log('Deleting user:', id);

    this.user = null;
  }
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