/*let id = document.getElementById('id') as HTMLInputElement
let nomeUtente = document.getElementById('nome') as HTMLInputElement
let cognomeUtente = document.getElementById('cognome') as HTMLInputElement
let ral = document.getElementById('ral') as HTMLInputElement
let btn = document.getElementById('btn') as HTMLButtonElement
let div = (document.getElementById('blocco')) as HTMLDivElement
let id = (<HTMLInputElement>document.getElementById('nome')).value*/


abstract class Lavoratore {
    nome:string;
    cognome:string;
    protected codRedd:number;
    protected redditoAnnuoLordo:number;
    //protected tasseInps:number;
    //protected tasseIrpef:number;
        constructor(codRedd:number,redditoAnnuoLordo:number,nome:string,cognome:string){
            this.codRedd = codRedd;
            this.redditoAnnuoLordo = redditoAnnuoLordo;
            this.nome = nome;
            this.cognome = cognome
            //this.tasseInps = tasseInps;
            //this.tasseIrpef = tasseIrpef;
        }
         getUtileTasse():number{
            let x:number = 0;
            if (this.codRedd === 1){
                x= this.redditoAnnuoLordo *0.05
            } else if (this.codRedd === 2){
                x= this.redditoAnnuoLordo *0.07
            } else if (this.codRedd === 3){
                x= this.redditoAnnuoLordo *0.1
            } else{
                x= this.redditoAnnuoLordo *0.2
            }
            return x
        }

         getTasseInps():number{     
            return this.redditoAnnuoLordo *0.091    
        }

         getTasseIrpef(){
            let x:number = 0;
            if(this.redditoAnnuoLordo < 12000){
                x= this.redditoAnnuoLordo * 0.20
            } else if(this.redditoAnnuoLordo >= 12000 && this.redditoAnnuoLordo < 18000){
                x= (12000 *0.20) + (this.redditoAnnuoLordo - 12000) * 0.25
            } else if(this.redditoAnnuoLordo >= 18000 && this.redditoAnnuoLordo < 30000){
                x= (12000 *0.20) + (6000 * 0.25) + (this.redditoAnnuoLordo - 18000) * 0.30
            } else {
                x= (12000 *0.20) + (6000 * 0.25) + (12000*0.30) + (this.redditoAnnuoLordo - 30000) * 0.35
            }
            return x
        }

         getRedditoAnnuoNetto():number{
            return this.redditoAnnuoLordo - (this.getUtileTasse() + this.getTasseInps() + this.getTasseIrpef())
         }
}

class Operaio extends Lavoratore {
    constructor(codRedd:number,redditoAnnuoLordo:number,nome:string,cognome:string){
        super(codRedd,redditoAnnuoLordo,nome,cognome)
    }
}

let manOperaio = new Operaio(1,11500,'Giulio','Giuliani')
console.log(`${manOperaio.nome} ${manOperaio.cognome} ha come spesa utile sulle tasse ${manOperaio.getUtileTasse()}`)   //575
console.log(manOperaio.getTasseInps())    //1046.5  
console.log(manOperaio.getTasseIrpef())   //2300
console.log(manOperaio.getRedditoAnnuoNetto())

class Manager extends Lavoratore {
    constructor(codRedd:number,redditoAnnuoLordo:number,nome:string,cognome:string){
        super(codRedd,redditoAnnuoLordo,nome,cognome)
    }
}
console.log('--------------------')

let manManager = new Manager(3,28000,'Mirco','Bombolo')
console.log(manManager.getUtileTasse())   //2800
console.log(manManager.getTasseInps())    //2548  
console.log(manManager.getTasseIrpef())   //6900
console.log(manManager.getRedditoAnnuoNetto())
class Politico extends Lavoratore {
    constructor(codRedd:number,redditoAnnuoLordo:number,nome:string,cognome:string){
        super(codRedd,redditoAnnuoLordo,nome,cognome)
    }
}
console.log('--------------------')

let manPolitico = new Politico(4,70000,'Lucia','giulio')
console.log(manPolitico.getUtileTasse())   //14000
console.log(manPolitico.getTasseInps())    //6370  
console.log(manPolitico.getTasseIrpef())   //21500 
console.log(manPolitico.getRedditoAnnuoNetto())

