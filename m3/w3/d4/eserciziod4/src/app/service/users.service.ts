import { Injectable } from '@angular/core';
import { User } from '../interface/user';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}
  private userSubject = new BehaviorSubject<null|User>(null)

  users$ = this.userSubject.asObservable()
  users!:User[];

  getUsers() {
    return this.http.get("db.json/users")
  }



  getUser(id:number): User[]{
    return this.users.filter((el: User) => el.id == id)

  }

}
