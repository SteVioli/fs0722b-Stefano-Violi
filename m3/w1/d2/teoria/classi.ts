// class Persona {
//     nome:string ;
//     cognome:string;
//     constructor(nome:string,cognome:string){
//         this.nome = nome;
//         this.cognome = cognome
//     }
//     visualizzaNomeCognome(){
//         return this.nome + " " + this.cognome;
//     }
// };

class Car {
    //field
    engine:string;

    //constructor -> è tipo una funzione speciale della classe che serve a inizializzare le variabili -> è una funzione, quindi può avere parametri
    constructor(engine:string){
        this.engine = engine
    }
    //function
    disp():void{
        console.log("Engine is: " + this.engine)
    }
}

// posso creare un oggetto per istanziarlo
let obj = new Car("XXSY1")

// accedo al campo
console.log("Leggo l'attributo valore di Engine: " + obj.engine)
obj.disp()