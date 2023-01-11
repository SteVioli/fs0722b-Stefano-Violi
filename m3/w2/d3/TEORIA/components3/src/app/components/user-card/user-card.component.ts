import { Component, OnInit ,Input } from '@angular/core';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input('data') element!: User; //qua importo solo Input perchè deve solo ricevere dati e stamparli

  constructor() { }

  ngOnInit(): void {
  }

}
