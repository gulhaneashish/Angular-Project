import { Component } from '@angular/core';
import { passwordStrengthValidator } from '../password-strength.validator';
import { passwordMatchValidator } from '../password-match.validator';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  constructor(private router: Router) {}

  registrationForm = new FormGroup(
  {
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordStrengthValidator
    ]),

    confirmPassword: new FormControl('', [
      Validators.required
    ]),

    age: new FormControl('', [
      Validators.required,
      Validators.min(18)
    ])
  },
  {
    validators: passwordMatchValidator
  }
);

 onSubmit() {

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    console.log(this.registrationForm.value);
    this.router.navigate(['/login']);
  }

}