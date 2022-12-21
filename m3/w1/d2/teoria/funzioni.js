//definizione di una funzione
/*function nome_funzione(){
    //function body e definition
    console.log("function called!")
}
nome_funzione() // invoco la funzione
*/
//una funzione può essere chiamata, ma anche restituita
function greet() {
    return "hello world";
}
function caller() {
    var msg = greet(); // chiamo la funzione greet dentro la funzione caller
    console.log(msg);
}
caller();
// le funzioni possono avere dei parametri e con typescript posso controllare i tipi dati, ma possiamo anche avere parametri opzionali
// cioè quando non tutti gli argomenti vengono passati
function display_dettagli(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mail_id != undefined) {
        console.log("Mail:", mail_id);
    }
}
display_dettagli(123, "Stefano");
display_dettagli(111, "Fabio", "bombo_gigabombo");
//parametri rest ovvero quelli con i ...
//in typescript devono essere tutti dello stesso tipo
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (var i_1 = 0; i_1 < nums.length; i_1++) {
        sum = sum + nums[i_1];
    }
    console.log("numbers sum is " + sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
// parametri predefiniti -> esempio una funzione che calcola un prezzo che ha uno sconto
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Lo sconto ammonta a : ", discount);
}
calculate_discount(1000); // con questo mantengo il parametro della funzione
calculate_discount(1000, 0.30); // mettendo il secondo parametro, sovrascrivo quello base della funzione che è sempre un numero
// funzioni anonime
var messaggio = function () {
    return "Hello WorlD";
};
console.log(messaggio());
//funzioni anonime con parametri
var res = function (a, b) {
    return a * b;
};
console.log(res(5, 2));
// anche TS supporta il costruttore function
var myFunction = new Function("a", "b", "return a * b");
var x1 = myFunction(4, 3);
console.log(x1);
