import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  name = '';
  email = '';
  age = 0;
  department = 'Development';

  @Output()
  employeeAdded = new EventEmitter<Employee>();

  submitForm() {

    if (!this.name || !this.email || this.age <= 0) {
      alert('Please enter valid employee details.');
      return;
    }

    const employee: Employee = {
      id: Date.now(),
      name: this.name,
      email: this.email,
      age: this.age,
      department: this.department
    };

    this.employeeAdded.emit(employee);

    this.name = '';
    this.email = '';
    this.age = 0;
    this.department = 'Development';
  }
}