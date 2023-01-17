import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormArray, Validators } from  '@angular/forms'
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})

export class ReactiveComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form!: FormGroup;



  ngOnInit(): void {
    this.form = this.fb.group({
      infoGenerali: this.fb.group({
        nome: this.fb.control(null, [Validators.required]),
        alterEgo: this.fb.control(null, [Validators.required]),
        debolezze: this.fb.control(null),
        nemico: this.fb.control(null,[Validators.required,Validators.maxLength(10)]),
        pianeta: this.fb.control(null,[Validators.required,Validators.minLength(5)]),
        poteri: this.fb.array(['']),
      }),


    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }


  getFormC(nome:string){

   return this.form.get(nome)
  }

  getErrorsC(nome:string,error:string){
      return this.form.get(nome)?.errors![error]
  }


  getPoteriF(){
    return (this.form.get('poteri') as FormArray).controls;
  }

  addPoteri(){
    const control = this.fb.control(null);
    (this.form.get('poteri') as FormArray).push(control)
  }

  submit(){
    console.log(this.form)
    console.log('Form correttamente inviato')
    this.form.reset()
    this.getPoteriF().length = 1;


  }
}
