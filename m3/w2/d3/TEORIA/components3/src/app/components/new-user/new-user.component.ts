import { Component, OnInit , Output, EventEmitter } from '@angular/core'; //importo Output, EventEmitter (mi serve per dichiarare gli elementi che voglio come eventemittter)
import { User } from 'src/app/interface/user.interface'; //devo SEMPRE IMPORTARE USER
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {


  @Output() onManCreated = new EventEmitter<User>(); //devo SEMPRE IMPORTARE USER
  @Output() onWomanCreated = new EventEmitter<User>() //sono 2 eventi che vengono sparati fuori e qualcuno li deve ricevere

  newName = '';     //dichiaro 3 variabili che dovranno ricevere dei valori
  newSurname = '';
  newEta = 0;

  constructor() { }

  //creo i 2 metodi che dovranno essere degli eventEmitter, quindi li dichiaro subito come eventEmitter cioè che dovranno darci il loro risultato

  onAddMan(){
    this.onManCreated.emit({   //tireranno fuori un oggetto come è fatto la mia interfaccia, e lo riceverà chi richiede questi metodi
      name:this.newName,
      surname:this.newSurname,
      sex:'Uomo',
      eta:this.newEta   //devo riportare i valori della mia interface
    })
  }
  onAddWoman(){
    this.onWomanCreated.emit({
      name:this.newName,
      surname:this.newSurname,
      sex:'Donna',
      eta:this.newEta
    })
  }

  ngOnInit(): void {
  }

}
