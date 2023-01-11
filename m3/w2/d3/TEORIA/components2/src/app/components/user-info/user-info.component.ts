import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core'; // 1) Importiamo

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {}

  @Input() user: any; // 2) scopo ricevere un input user di tipo any

  ngOnInit(): void {
    console.log('ngOnInit Attivato'); //4 per ogni component nella base dati viene lanciato un messaggio in console ( 5x avendo noi 5 oggetti )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges attivato!');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck attivato!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit attivato!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked attivato!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit attivato!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewInit attivato!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy attivato!');
    alert('scaricamento del componente');
  }
}
