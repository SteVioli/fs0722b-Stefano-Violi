var Persona = /** @class */ (function () {
    function Persona(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Persona.prototype.visualizzaNomeCognome = function () {
        return this.nome + " " + this.cognome;
    };
    return Persona;
}());
;
var Car = /** @class */ (function () {
    //constructor -> è tipo una funzione speciale della classe che serve a inizializzare le variabili -> è una funzione, quindi può avere parametri
    function Car(engine) {
        this.engine = engine;
    }
    //function
    Car.prototype.disp = function () {
        console.log("Engine is: " + this.engine);
    };
    return Car;
}());
// posso creare un oggetto per istanziarlo
var obj = new Car("XXSY1");
// accedo al campo
console.log("Leggo l'attributo valore di Engine: " + obj.engine);
obj.disp();
