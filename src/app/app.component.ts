import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  users = DUMMY_USERS;

  onSelectUser(id: String)
  {
    console.log('Selected user with id:' + id);
  }
}
