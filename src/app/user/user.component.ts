import { Component, signal, computed, Input } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avatar!: String;
  @Input({required: true}) name!: String;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  }

}
