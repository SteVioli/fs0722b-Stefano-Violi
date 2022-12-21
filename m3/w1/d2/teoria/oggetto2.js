var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.visualizzaNomeCognome = function () {
        return this.nome + " " + this.cognome;
    };
    return Persona;
}());
var marioRossi = new Persona();
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
var Omino = /** @class */ (function () {
    function Omino(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Omino.concatena = function (a, b) {
        return a + " " + b;
    };
    return Omino;
}());
console.log(Omino.concatena("Giulio", "Bullo"));
// extends -> estendo una classe
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle is " + this.Area);
    };
    return Circle;
}(Shape));
var oggettoCheIstanzio = new Circle(450);
oggettoCheIstanzio.disp();
// extends multilivello -> posso fare quanti annidamenti voglio
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); // questa eredita indirettamente da root, perchè eredita da child che ha ereditato da root
var obj_1 = new Leaf();
obj_1.str = "hello";
console.log(obj_1.str);
