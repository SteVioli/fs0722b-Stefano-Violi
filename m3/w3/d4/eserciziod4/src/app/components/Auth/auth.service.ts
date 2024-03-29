import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

export interface SignupData {
  nome: string,
  surname: string,
  email: string,
  password: string
}

export interface AuthData {
  accessToken: string,
  user: {
    email: string,
    nome: string,
    surname: string,
    id: number
  }
}

export interface Login {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService()
  URL = 'http://localhost:4201'

  private authSubject = new BehaviorSubject<null|AuthData>(null)
  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(map(user => !!user))
  authLogoutTimer:any;

  constructor(private http:HttpClient, private router:Router) {
    this.restoreUser()
   }

   signUp(data:SignupData){
    return this.http.post(`${this.URL}/register`, data).pipe(catchError(this.errors))
   }



   logIn(data:Login){
    return this.http.post<AuthData>(`${this.URL}/login`, data).pipe(tap(data => {
      this.authSubject.next(data);
      localStorage.setItem("user", JSON.stringify(data));
      const expirationDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
      this.authLogout(expirationDate)
    }), catchError(this.errors))

   }

   authLogout(expirationDate:Date){
    const expMs = expirationDate.getTime() - new Date().getTime()
    this.authLogoutTimer = setTimeout(() => {
      this.logout()
    }, expMs);

   }

   logout(){
    this.authSubject.next(null)
    this.router.navigate(["/login"])
    localStorage.removeItem("user")         // è tipo il "rimani connesso" - ci può essere un solo "user" alla volta
    clearTimeout(undefined)                 // this.authLogoutTimer

   }

   restoreUser(){
    const userJson = localStorage.getItem("user");
    if(!userJson){
      return
    }
    const user:AuthData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){      // controlla se il token è scaduto
      return
    }

    this.authSubject.next(user);
    const expirationDate = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;

    this.authLogout(expirationDate)
   }



   private errors(err: any) {
    switch (err.error) {
        case "Email and password are required":
            return throwError('Email e password sono obbligatorie');
            break;
        case "Email already exists":
            return throwError('Utente già registrato');
            break;
        case "Email format is invalid":
            return throwError('Email scritta male');
            break;
        case "Cannot find user":
            return throwError('L\'utente non esiste');
            break;
        default:
            return throwError('Errore nella chiamata');
            break
    }
}
}

