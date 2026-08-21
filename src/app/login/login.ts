import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router) {}

   email = '';
  password = '';

onSubmit(loginForm: NgForm) {

  if (loginForm.invalid) {
    return;
  }

  console.log('Email:', this.email);
  console.log('Password:', this.password);
  localStorage.setItem('token', 'dummy-token');

  this.router.navigate(['/']);
}

  login(): void {
    localStorage.setItem('token', 'dummy-token');

    this.router.navigate(['/admin']);
  }
}

