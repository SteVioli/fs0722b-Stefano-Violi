//possibilità di leggere e settare all'interno di oggetti
//get e set
class Uomo {
    nome:string;
    cognome:string;
    constructor(nome,cognome){
        this.nome = nome;
        this.cognome = cognome;
    }
    get nomeCompleto():string {
        return this.nome + " " + this.cognome
    }
    set nomeCompleto(valore:string){
        let parti = valore.toString().split(' ')
        this.nome = parti[0] || '';
        this.cognome =parti[1] || '';
    }
}
let stefanoVioli = new Uomo("Stefano","Violi")
console.log(stefanoVioli.nomeCompleto)
stefanoVioli.nomeCompleto = 'Giuseppe Verdi';
console.log(stefanoVioli.nomeCompleto)
console.log(stefanoVioli.nome)
console.log(stefanoVioli.cognome)


//tsc oggetto3.ts --target ES5 quando rompe le palle con la versione gli dai target corretto

// oppure

//utilizzi il file tsconfig.json