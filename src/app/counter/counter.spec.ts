import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment count', () => {
  component.increment();
  expect(component.count).toBe(1);

});

it('should display the count', () => {
  const element: HTMLElement = fixture.nativeElement;
  expect(element.textContent).toContain('Count: 0');

});
});
