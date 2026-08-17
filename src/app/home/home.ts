import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  title = 'Welcome to Employee Management System';

  description = 'Manage employees using Angular components, forms and directives.';
}

