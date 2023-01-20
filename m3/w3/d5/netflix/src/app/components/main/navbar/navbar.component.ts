import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isLoggedIn:boolean = false;

    constructor(private authSrv: AuthService) { }


    ngOnInit(): void {
      this.authSrv.isLoggedIn$.subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn
      })
    }

    onLogout(){
      this.authSrv.logout()
    }

}
