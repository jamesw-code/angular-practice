import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from './user.model';

// type User = {
//   id:string; 
//   avatar: string; 
//   name: string
// }

// interface User {
//   id:string; 
//   avatar: string; 
//   name: string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true }) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Output() selectUser = new EventEmitter<string>();

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

}
