import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Employees } from './employees/employees';
import { EmployeeDetails } from './employee-details/employee-details';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'employees',
    component: Employees
  },
  {
    path: 'employees/:id',
    component: EmployeeDetails
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./registration/registration').then(m => m.Registration)
  },
 {
  path: 'admin',
  loadComponent: () =>
    import('./admin/admin').then(m => m.Admin),

  canActivate: [authGuard],

  children: [

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },

    {
      path: 'dashboard',
      loadComponent: () =>
        import('./admin-dashboard/admin-dashboard')
          .then(m => m.AdminDashboard)
    },

    {
      path: 'users',
      loadComponent: () =>
        import('./admin-users/admin-users')
          .then(m => m.AdminUsers)
    },

    {
      path: 'settings',
      loadComponent: () =>
        import('./admin-settings/admin-settings')
          .then(m => m.AdminSettings)
    }

  ]
}
];