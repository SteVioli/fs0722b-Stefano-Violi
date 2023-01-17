import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  @ViewChild('form', {static:true}) form!: NgForm;


  heroForm ={
    defName: '',
    alterEgo:'',
    enemy:'',
    planet:'',
    weakness:''
  }

  hero:any = {
    name:'',
    alterEgo:'',
    enemy:'',
    planet:'',
    weakness:''
  }

  power=''

  constructor() { }

  ngOnInit(): void {
    this.form.statusChanges?.subscribe(status=>{
      console.log('Status form', status);

    })
  }
  submit() {
    console.log('Form inviato: ', this.form);

    this.hero.name = this.form.value.heroForm.defName;
    this.hero.alterEgo = this.form.value.heroForm.alterEgo;
    this.hero.enemy = this.form.value.heroForm.enemy;
    this.hero.planet= this.form.value.heroForm.planet;
    this.hero.weakness= this.form.value.heroForm.weakness;;

    this.form.reset();
}

}
