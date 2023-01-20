import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
users!: any;

  constructor( private usersSrv: UsersService) { }

  ngOnInit(): void {
    this.usersSrv.getUsers().subscribe(user => this.users = user)
    console.log(this.users)
  }



}
