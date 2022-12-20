class Persona {
    firstName:string;
    lastName:string;
    balanceInit:number = 0;
    interests:number =0;
    constructor(a:string,b:string,c:number){
        this.firstName = a;
        this.lastName = b;
        this.balanceInit = c
    }
    public oneDeposit(amount:number):void{
        this.balanceInit = amount
        console.log(`${this.firstName} ${this.lastName} hai depositato ${this.balanceInit} euro`)
    }
    public oneWithDraw(amount:number):void{
        this.balanceInit = amount
        console.log(`${this.firstName} ${this.lastName} hai prelevato ${this.balanceInit} euro`)
    }  
    }
class Stefano extends Persona{
    disp():void{
        console.log('Benvenuto ' + this.firstName + ' ' + this.lastName + '.Hai appena effettuato un versamento di ' + this.balanceInit )
    }
}
class Mother extends Persona {
    public addInterest(amount:number){
        this.interests = amount
        console.log(`${this.firstName} ${this.lastName} ti abbiamo applicato un tasso di interessi pari al ${this.interests}% per un totale di ${this.balanceInit*(this.interests/100)} euro`)
    }
};
let donna = new Mother ('Giulia','Giuliani',2000)
let stefano = new Stefano ('Stefano','Violi',5000)
console.log(stefano.disp(),stefano.oneDeposit(200),stefano.oneWithDraw(50))
console.log(donna.oneDeposit(200),donna.oneWithDraw(50),donna.addInterest(10))

let deposito1 = document.getElementById('primoDeposito')
let prelievo1 = document.getElementById('primoPrelievo')
let btn_1_depo = document.getElementById('btnPrimoDeposito')
let btn_1_prel = document.getElementById('btnPrimoPrelievo')





    


