import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
// scrivere cosa voglio importare di servizio ( cosa voglio che faccia )

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {

  name!:string;
  //per utilizzare questo servizio dobbiamo dichiararlo nel constructor
  constructor(private userSrv:UsersService) {}

  ngOnInit(): void {}

  onNewUser(nome:string){
    if (nome != undefined && nome.length > 0){
    this.userSrv.createUser(nome);
    }
  }
}
