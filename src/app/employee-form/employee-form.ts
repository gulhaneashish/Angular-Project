import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-form',

  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],

  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  employeeForm = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    age: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(60)
    ]),

    department: new FormControl('Development', [
      Validators.required
    ])

  });


  submitForm() {

    if (this.employeeForm.invalid) {

      this.employeeForm.markAllAsTouched();

      return;
    }

    console.log('Employee Data:', this.employeeForm.value);
  }
}