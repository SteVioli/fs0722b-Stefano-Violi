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
// typescript supporta l'ereditarietà delle classi
// la keyword extends estende una classe "base"
// nel costruttore della classe derivata, useremo super() per invocare il costruttore della classe base
var Vehicle = /** @class */ (function () {
    function Vehicle(marca, modello, tipoVeicolo) {
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;
    }
    Vehicle.prototype.dettagliVeicolo = function () {
        return "".concat(this.tipoVeicolo, " - ").concat(this.marca, " - ").concat(this.modello);
    };
    return Vehicle;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(marca, modello) {
        return _super.call(this, marca, modello, 'auto') || this;
    }
    return Cars;
}(Vehicle));
var Motorbyke = /** @class */ (function (_super) {
    __extends(Motorbyke, _super);
    function Motorbyke(marca, modello) {
        return _super.call(this, marca, modello, 'motocicletta') || this;
    }
    return Motorbyke;
}(Vehicle));
var jaguar = new Cars('Jaguar', 'F-type');
var ducati = new Motorbyke('Ducati', 'Panigale V4');
console.log(jaguar instanceof Cars);
//console.log(ducati instanceof Motorbyke)
//console.log(ducati instanceof Cars)
console.log(jaguar.dettagliVeicolo());
