import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core'; //aggiungo Input , Output , EventEmitter

@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.scss']
})
export class EtaComponent implements OnInit {

  @Input() eta!:number    //in entrata riceve eta
  @Output() etaChange = new EventEmitter<number>()  //in uscita darà un metodo che genera un numero


  constructor() { }

  add(){
    this.eta++;
    this.etaChange.emit(this.eta);
  }

  sott(){
    this.eta--
    if (this.eta >=0){
      this.etaChange.emit(this.eta)
    }else {
      this.eta = 0;
    }
  }

  ngOnInit(): void {
  }

}
