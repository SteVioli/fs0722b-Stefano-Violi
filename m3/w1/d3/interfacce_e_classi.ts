// interface -> è un modo di definire dei TIPI PERSONALIZZATI in TypeScript
// interface -> è una sorta di vincolo ad un contratto, ci definisce la modalità in cui un oggetto può interagire con un altro oggetto
// interface -> definisce i membri che una classe deve avere così che gli oggetti che devono interagire sanno che proprietà/metodi chiamare

interface IPersona {
    nome:string;
    cognome:string;
    visualizzaNomeCognome():string;
}
// una classe che vuole interagire con l'interfaccia deve "aderire al contratto"
// e cioè avere nome,cognome, visualizzaNomeCognome() e queste proprietà devono essere in formato stringa
// keyword da usare è implements

class Persona implements IPersona {                   //la classe Persona tramite "implements" , dichiara di implementare l'interfaccia IPersona
    nome: string;
    cognome:string;
    constructor(nome:string,cognome:string){
        this.nome = nome;
        this.cognome = cognome;
    }
    visualizzaNomeCognome(){
        return this.nome + " " + this.cognome;
    }
}
// implemento una proprietà non prevista dall'interfaccia
enum Materie {Storia,Informatica,Matematica,Html,Css,Javascript}
/*class Studente implements IPersona {
        nome:string;
        cognome:string;
        materie: Materie [];    //implemento una proprietà non prevista nell'interfaccia. perchè comunque ho rispetto i membri MINIMI
        constructor(nome:string,cognome:string){
            this.nome = nome;
            this.cognome = cognome;
            this.materie = [];
        }
    visualizzaNomeCognome(){
        return this.nome + " " + this.cognome
    }
}*/

// posso implementare più interfacce contemporaneamente
interface IStudio {
    materie: Materie[]
}

class Studente implements IPersona, IStudio {
    nome:string;
    cognome:string;
    materie: Materie [];
    constructor(nome:string,cognome:string){
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }
    visualizzaNomeCognome(){
        return this.nome + " " + this.cognome
    }
}

// TypeScript prevede l'estendibilità delle interfacce -> definiamo una nuova interfaccia ereditante le caratteristiche definite in un'altra interfaccia
// TypeScript prevede l'estendibilità delle interfacce -> definiamo una nuova interfaccia ereditante le caratteristiche definite in un'altra interfaccia
// TypeScript prevede l'estendibilità delle interfacce -> definiamo una nuova interfaccia ereditante le caratteristiche definite in un'altra interfaccia
interface IStudente extends IPersona {          
    materie: Materie[];

}
class Studente1 implements IStudente {
    nome:string;
    cognome:string;
    materie: Materie [];
    constructor(nome:string,cognome:string){
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
    }
    visualizzaNomeCognome(){
        return this.nome + " " + this.cognome
    }
}