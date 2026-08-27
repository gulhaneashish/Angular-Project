import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { Employees } from './employees';
import { EmployeeService } from '../employee.service';
import { ApiEmployee } from '../api-employee';

describe('Employees', () => {

  let component: Employees;
  let fixture: ComponentFixture<Employees>;

  const mockEmployees: ApiEmployee[] = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  ];

  const mockEmployeeService = {
    getEmployees: () => of(mockEmployees)
  };

beforeEach(async () => {

  await TestBed.configureTestingModule({

    imports: [Employees],

    providers: [
      {
        provide: EmployeeService,
        useValue: mockEmployeeService
      }
    ]

  })
  .overrideComponent(Employees, {
    set: {
      template: '<div></div>',
      imports: []
    }
  })
  .compileComponents();

  fixture = TestBed.createComponent(Employees);
  component = fixture.componentInstance;

  fixture.detectChanges();

  await fixture.whenStable();
});


  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should load employees', () => {

    expect(component.employees).toEqual(mockEmployees);

  });

});