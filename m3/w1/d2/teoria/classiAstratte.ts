// si basano su una keyword che si chiama abstract -> sono classi basi che non possono essere istanziate
// devono avere almeno un metodo su cui farò la dichiarazione senza che venga implementato
abstract class Veicolo {
    private colore:string; // private vuol dire non accessibile dall'esterno
    protected modello:string; //protected vuol dire accessibile dalla classe e da quelle che la ereditano
    protected marca:string;

    constructor(marca:string,modello:string,colore:string){
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    public vernicia(colore:string):void{
        this.colore = colore;
    }
    public coloreCorrente():string{
        return this.colore;
    }
    public abstract dettagliVeicolo():string
}
class Automobile extends Veicolo {
    constructor(marca:string,modello:string,colore:string){
        super(marca,modello,colore);
    }
    public dettagliVeicolo():string {
        return `${this.marca} - ${this.modello}`
    }
}

//const veicolo = new Veicolo('jaguar','f-type','nero')
const Jaguar = new Automobile('jaguar','f-type','nero')
console.log(Jaguar.dettagliVeicolo());
console.log(Jaguar.coloreCorrente()) ;
Jaguar.vernicia('rosso');
console.log(Jaguar.coloreCorrente())