import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(employees: Employee[], searchText: string): Employee[] {

    if (!searchText) {
      return employees;
    }

    const search = searchText.toLowerCase();

    return employees.filter(employee =>
      employee.name.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search)
    );
  }
}