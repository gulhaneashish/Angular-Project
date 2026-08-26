import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(loginForm: NgForm) {

    if (loginForm.invalid) {
      return;
    }

    this.authService.login(
      this.email,
      this.password
    ).subscribe({

      next: (response) => {

        this.authService.saveToken(response.token);
        this.authService.saveRole(response.role);
        this.router.navigate(['/']);

      },

      error: (error) => {

        console.error('Login failed', error);

      }

    });

  }

}