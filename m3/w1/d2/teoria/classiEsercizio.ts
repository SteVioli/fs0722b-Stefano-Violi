// typescript supporta l'ereditarietà delle classi
// la keyword extends estende una classe "base"
// nel costruttore della classe derivata, useremo super() per invocare il costruttore della classe base
class Vehicle{
    modello:string;
    marca:string;
    tipoVeicolo:string;

    constructor(marca:string,modello:string,tipoVeicolo:string){
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;
    }
    dettagliVeicolo():string{
        return `${this.tipoVeicolo} - ${this.marca} - ${this.modello}`;
    }
}

class Cars extends Vehicle {
    constructor(marca:string,modello:string){
        super(marca,modello,'auto');
    }
}

class Motorbyke extends Vehicle {
    constructor(marca:string,modello:string){
        super(marca,modello,'motocicletta');
    }
}

const jaguar = new Cars ('Jaguar','F-type')
const ducati = new Motorbyke ('Ducati' , 'Panigale V4')

console.log(jaguar instanceof Cars)
//console.log(ducati instanceof Motorbyke)
//console.log(ducati instanceof Cars)
console.log(jaguar.dettagliVeicolo())
