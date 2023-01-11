import { Component, OnInit, ViewChild } from '@angular/core'; //importo ViewChild che crea il decoratore ViewChild
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @ViewChild(ChildComponent, {static:true}) child!:ChildComponent
  //utilizzo ViewChild e tra () dichiaro cosa devo visualizzare, seguito sempre da static:true, dopo di che lo richiamo con child!:ChildComponent
  //attraverso ViewChild dico quale selettore usare , dichiaro static e quale componente utilizzare

  constructor() {}

  ngOnInit(): void {}
}
