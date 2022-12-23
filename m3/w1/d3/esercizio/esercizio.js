/*let id = document.getElementById('id') as HTMLInputElement
let nomeUtente = document.getElementById('nome') as HTMLInputElement
let cognomeUtente = document.getElementById('cognome') as HTMLInputElement
let ral = document.getElementById('ral') as HTMLInputElement
let btn = document.getElementById('btn') as HTMLButtonElement
let div = (document.getElementById('blocco')) as HTMLDivElement
let id = (<HTMLInputElement>document.getElementById('nome')).value*/
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
var Lavoratore = /** @class */ (function () {
    //protected tasseInps:number;
    //protected tasseIrpef:number;
    function Lavoratore(codRedd, redditoAnnuoLordo, nome, cognome) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.nome = nome;
        this.cognome = cognome;
        //this.tasseInps = tasseInps;
        //this.tasseIrpef = tasseIrpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var x = 0;
        if (this.codRedd === 1) {
            x = this.redditoAnnuoLordo * 0.05;
        }
        else if (this.codRedd === 2) {
            x = this.redditoAnnuoLordo * 0.07;
        }
        else if (this.codRedd === 3) {
            x = this.redditoAnnuoLordo * 0.1;
        }
        else {
            x = this.redditoAnnuoLordo * 0.2;
        }
        return x;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.redditoAnnuoLordo * 0.091;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var x = 0;
        if (this.redditoAnnuoLordo < 12000) {
            x = this.redditoAnnuoLordo * 0.20;
        }
        else if (this.redditoAnnuoLordo >= 12000 && this.redditoAnnuoLordo < 18000) {
            x = (12000 * 0.20) + (this.redditoAnnuoLordo - 12000) * 0.25;
        }
        else if (this.redditoAnnuoLordo >= 18000 && this.redditoAnnuoLordo < 30000) {
            x = (12000 * 0.20) + (6000 * 0.25) + (this.redditoAnnuoLordo - 18000) * 0.30;
        }
        else {
            x = (12000 * 0.20) + (6000 * 0.25) + (12000 * 0.30) + (this.redditoAnnuoLordo - 30000) * 0.35;
        }
        return x;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - (this.getUtileTasse() + this.getTasseInps() + this.getTasseIrpef());
    };
    return Lavoratore;
}());
var Operaio = /** @class */ (function (_super) {
    __extends(Operaio, _super);
    function Operaio(codRedd, redditoAnnuoLordo, nome, cognome) {
        return _super.call(this, codRedd, redditoAnnuoLordo, nome, cognome) || this;
    }
    return Operaio;
}(Lavoratore));
var manOperaio = new Operaio(1, 11500, 'Giulio', 'Giuliani');
console.log("".concat(manOperaio.nome, " ").concat(manOperaio.cognome, " ha come spesa utile sulle tasse ").concat(manOperaio.getUtileTasse())); //575
console.log(manOperaio.getTasseInps()); //1046.5  
console.log(manOperaio.getTasseIrpef()); //2300
console.log(manOperaio.getRedditoAnnuoNetto());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(codRedd, redditoAnnuoLordo, nome, cognome) {
        return _super.call(this, codRedd, redditoAnnuoLordo, nome, cognome) || this;
    }
    return Manager;
}(Lavoratore));
console.log('--------------------');
var manManager = new Manager(3, 28000, 'Mirco', 'Bombolo');
console.log(manManager.getUtileTasse()); //2800
console.log(manManager.getTasseInps()); //2548  
console.log(manManager.getTasseIrpef()); //6900
console.log(manManager.getRedditoAnnuoNetto());
var Politico = /** @class */ (function (_super) {
    __extends(Politico, _super);
    function Politico(codRedd, redditoAnnuoLordo, nome, cognome) {
        return _super.call(this, codRedd, redditoAnnuoLordo, nome, cognome) || this;
    }
    return Politico;
}(Lavoratore));
console.log('--------------------');
var manPolitico = new Politico(4, 70000, 'Lucia', 'giulio');
console.log(manPolitico.getUtileTasse()); //14000
console.log(manPolitico.getTasseInps()); //6370  
console.log(manPolitico.getTasseIrpef()); //21500 
console.log(manPolitico.getRedditoAnnuoNetto());
