import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UsersService } from './users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private usersService: UsersService) {}

    canActivate(): boolean {
        return this.usersService.isLoggedIn;
    }

}