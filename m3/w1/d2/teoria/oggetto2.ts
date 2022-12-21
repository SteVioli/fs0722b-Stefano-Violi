class Persona {
    nome:string;
    cognome:string;
    visualizzaNomeCognome(){                //se non dichiaro nulla è pubblico e quindi accessibile dall'esterno
        return this.nome + " " + this.cognome
    }
}
let marioRossi = new Persona();
marioRossi.nome = "Mario";
marioRossi.cognome = "Rossi";
console.log(marioRossi.visualizzaNomeCognome());


/*class Persona {
    nome:string;
    cognome:string;
    private visualizzaNomeCognome(){                // con private si può accedere solo all'interno della classe Persona
        return this.nome + " " + this.cognome
    }
}
let marioRossi = new Persona();
marioRossi.nome = "Mario";
marioRossi.cognome = "Rossi";
console.log(marioRossi.visualizzaNomeCognome());*/

// oltre a private esiste anche la keyword static
// static -> si usa quando voglio usare un metodo senza necessità di creare un'istanza della classe
class Omino {
    nome:string;
    cognome:string;
    constructor(nome:string,cognome:string){
        this.nome = nome;
        this.cognome = cognome;
    }
    static concatena(a:string, b:string){
        return a + " " + b;
    }
}
console.log(Omino.concatena("Giulio","Bullo"))

// extends -> estendo una classe

class Shape {
    Area:number;

    constructor(a:number){
        this.Area = a
    }
}
class Circle extends Shape {  // la classe figlia eredita dalla classe genitore (accede implicitamente)
    disp():void{
        console.log("Area of the circle is " + this.Area )
    }
}
let oggettoCheIstanzio = new Circle(450);
oggettoCheIstanzio.disp()

// extends multilivello -> posso fare quanti annidamenti voglio

class Root {
    str:string
}
class Child extends Root{}
class Leaf extends Child{} // questa eredita indirettamente da root, perchè eredita da child che ha ereditato da root

let obj_1 = new Leaf()
obj_1.str = "hello"
console.log(obj_1.str)