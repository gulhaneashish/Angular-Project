import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

 @Input() username = '';

  @Output() userSelected = new EventEmitter<string>();

  selectUser() {
    this.userSelected.emit(this.username);
  }
}
