import { Component, signal, computed } from '@angular/core';

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

  selectedUser = signal(DUMMY_USERS[randonIndex]);

  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randonIndex]);
  }

}
