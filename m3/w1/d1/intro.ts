/*var num:number = 12 
console.log(num)

var message:string = "Hello World"
console.log(message)

var x = 3;
function quadrato(n:number){
        return n*n;
}
var y = quadrato(x)
var a:string = "ciao"*/
class Greeting { //creo la classe greeting
    greet():void { //le assegno un metodo che mi stampa in questo caso una stringa
        console.log("Hello World")
    }
}
var obj = new Greeting();
obj.greet();

/*
    1.definisco una classe Greeting
    2.aggiungo un metodo greet()
    3. il metodo stampa una riga in console
    4. la kewyword new crea un oggetto della classe (obj)
    5. l'oggetto invoca il metodo greet
*/