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
    function Persona(a, b, c) {
        this.balanceInit = 0;
        this.firstName = a;
        this.lastName = b;
        this.balanceInit = c;
    }
    Persona.prototype.oneDeposit = function (amount) {
        this.balanceInit = amount;
        console.log("".concat(this.firstName, " ").concat(this.lastName, " hai depositato ").concat(this.balanceInit, " euro"));
    };
    Persona.prototype.oneWithDraw = function (amount) {
        this.balanceInit = amount;
        console.log("".concat(this.firstName, " ").concat(this.lastName, " hai prelevato ").concat(this.balanceInit, " euro"));
    };
    return Persona;
}());
var Stefano = /** @class */ (function (_super) {
    __extends(Stefano, _super);
    function Stefano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stefano.prototype.disp = function () {
        console.log('Benvenuto ' + this.firstName + ' ' + this.lastName + '.Hai appena effettuato un versamento di ' + this.balanceInit);
    };
    return Stefano;
}(Persona));
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mother.prototype.addInterest = function (amount) {
        this.interests = amount;
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ti abbiamo applicato un tasso di interessi pari al ").concat(this.interests, "% per un totale di ").concat(this.balanceInit * (this.interests / 100), " euro"));
    };
    return Mother;
}(Persona));
;
var donna = new Mother('Giulia', 'Giuliani', 2000);
var stefano = new Stefano('Stefano', 'Violi', 5000);
stefano.disp();
console.log(stefano.oneDeposit(200), stefano.oneWithDraw(50));
console.log(donna.oneDeposit(200), donna.oneWithDraw(50), donna.addInterest(10));
