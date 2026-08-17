import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employee';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [Highlight],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  @Input()
  employees: Employee[] = [];

  @Output()
  employeeDeleted = new EventEmitter<number>();

  deleteEmployee(id: number) {
    this.employeeDeleted.emit(id);
  }
}