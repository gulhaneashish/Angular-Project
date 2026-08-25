import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {

  @Input() user!: User;

    @Output() deleteUser = new EventEmitter<number>();

  onDelete() {
    this.deleteUser.emit(this.user.id);
  }
}