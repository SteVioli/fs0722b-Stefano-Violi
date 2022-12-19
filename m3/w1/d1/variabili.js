//sintassi per dichiarare una variabile
//let nome:string = "mary";  //la variabile memorizza un tipo di dato stringa
//let nome:string            //la variabile è una stringa, il valore è undefined
//let nome = "mary"          // il tipo di dato è dedotto dal valore che scrivo -> la variabile in questo caso è di tipo stringa
//let nome                     // il tipo di dato è any con valore undefined
var nome = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name:" + nome);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the score: " + sum);
// Type Assertion
var code = 123;
var employeeCode = code;
console.log(typeof (employeeCode));
// Inferred typing
var num = 2; //data type inferred as number // data type dedotto come numero
console.log("value of num " + num);
//num = "ciao" //da errore perchè ormai num è diventato num:number
// ambiti delle variabili
var global_num = 12; //variabile globale
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // class variabile
    }
    Numbers.prototype.StoreNum = function () {
        var local_num = 14; //local variabile
    };
    Numbers.sval = 10; // static field
    return Numbers;
}());
console.log("il numero globale è: " + global_num);
console.log(Numbers.sval);
var obje = new Numbers();
console.log("global num: " + obje.num_val);
//console.log("local num" + local_num) // non lo stampa perchè la variabile locale è all'interno e noi stiamo provando a prenderla da fuori
