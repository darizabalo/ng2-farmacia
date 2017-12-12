import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UsersService, User } from './users.service';

@Component({
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

    private users: User[];

    constructor(private usersService: UsersService){}

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