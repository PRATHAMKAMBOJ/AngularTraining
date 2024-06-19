import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TaskComponent } from './task/task.component';
import { NgFor , NgIf } from '@angular/common';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TaskComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  users:User[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find(user=>user.id == this.selectedUserId)!;
  }

  onSelectUser(id: string)
  {
    console.log('Selected user with id:' + id);
    this.selectedUserId = id;
  }
}
