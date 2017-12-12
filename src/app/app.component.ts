import { Component } from '@angular/core';

import {UsersService, User} from './users/users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  user: User;

  constructor(private usersService: UsersService) {
    usersService.user$.subscribe(data => this.user = data);
  }

}
