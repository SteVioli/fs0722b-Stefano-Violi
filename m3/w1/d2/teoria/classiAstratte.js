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
// si basano su una keyword che si chiama abstract -> sono classi basi che non possono essere istanziate
// devono avere almeno un metodo su cui farò la dichiarazione senza che venga implementato
var Veicolo = /** @class */ (function () {
    function Veicolo(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    Veicolo.prototype.vernicia = function (colore) {
        this.colore = colore;
    };
    Veicolo.prototype.coloreCorrente = function () {
        return this.colore;
    };
    return Veicolo;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile(marca, modello, colore) {
        return _super.call(this, marca, modello, colore) || this;
    }
    Automobile.prototype.dettagliVeicolo = function () {
        return "".concat(this.marca, " - ").concat(this.modello);
    };
    return Automobile;
}(Veicolo));
//const veicolo = new Veicolo('jaguar','f-type','nero')
var Jaguar = new Automobile('jaguar', 'f-type', 'nero');
console.log(Jaguar.dettagliVeicolo());
console.log(Jaguar.coloreCorrente());
Jaguar.vernicia('rosso');
console.log(Jaguar.coloreCorrente());
