import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UsersService, User } from './users/users.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {

    user: User;
    private users: User[];

    constructor(private usersService: UsersService) {
        usersService.user$.subscribe(data => this.user = data);
    }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.usersService.getUsers().subscribe(data => {
            this.users = data;
        });
    }

    setCurrentUser(user: User): void {
        this.usersService.setCurrentUser(user);
    }

}

