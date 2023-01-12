import { Directive, ElementRef , HostListener , HostBinding, Input} from '@angular/core';  //devo importare ElementRef, riporta uno specifico rendering, ci serve per intercettare l'elemento html che lo richiede
//importo host listener che ascolta quale elemento del dom ci sta chiamando
//importo host binding che collega gli elementi della direttiva con l elemento html che lo sta chiamando
//attraverso input manderemo le direttive che stanno qua dentro


@Directive({

  selector: '[appColora]',

})
export class ColoraDirective {

  @Input() defaultColor: string = 'red';
  @Input('appColora') newColor:string ='black';

  @HostBinding('style.color') color:string = 'black';
  @HostBinding('class.active') active:boolean = false;

  @HostListener('mouseenter') mouseEnter(){
    this.color = this.newColor;
    this.active = true;
  }

  @HostListener('mouseleave') mouseLeave(){
    this.color = this.defaultColor;
    this.active = false;
  }


  constructor(private ref: ElementRef) {
  }

  ngOnInit():void{
    console.log(this.ref)
    this.color = this.defaultColor;
  }
}
