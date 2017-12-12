import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class User {
    usu_id: number;
    usu_nombre: string;
    the_id: number;
    usu_nick: string;
    password: string;
    isAdmin: boolean;
    the_trama: string;
    the_color: string;
}

@Injectable()
export class UsersService {

    private usersUrl = 'http://localhost:80/farmacia/src/app/php/getusers.php';
    user = new Subject<User>();
    user$ = this.user.asObservable();
    isLoggedIn = false;

    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);       
    }

    //Currently not used
    getUser(id: number): Observable<User> {
        const url = `${this.usersUrl}?id=${id}`;
        return this.http.get<User>(url);
    }

    setCurrentUser(user: User): void {
        this.user.next(user);
        this.isLoggedIn = true;
    }
}

