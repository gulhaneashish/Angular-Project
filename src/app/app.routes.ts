import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Employees } from './employees/employees';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'employees',
    component: Employees
  }
];