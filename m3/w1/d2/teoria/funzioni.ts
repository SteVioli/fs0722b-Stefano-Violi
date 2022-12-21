//definizione di una funzione
/*function nome_funzione(){
    //function body e definition
    console.log("function called!")
}
nome_funzione() // invoco la funzione
*/
//una funzione può essere chiamata, ma anche restituita

function greet():string { // sto dicendo che la funzione restituisce una stringa
    return "hello world"
}
function caller(){
    let msg = greet() // chiamo la funzione greet dentro la funzione caller
    console.log(msg)
}
caller()

// le funzioni possono avere dei parametri e con typescript posso controllare i tipi dati, ma possiamo anche avere parametri opzionali
// cioè quando non tutti gli argomenti vengono passati

function display_dettagli(id:number,name:string,mail_id?:string){//il ? dopo mail_id vuol dire che può esserci come non esserci
    console.log("ID:",id)
    console.log("Name:",name)
    
    if(mail_id != undefined){
        console.log("Mail:",mail_id)
    }
}
display_dettagli(123,"Stefano");
display_dettagli(111,"Fabio","bombo_gigabombo")

//parametri rest ovvero quelli con i ...
//in typescript devono essere tutti dello stesso tipo

function addNumbers(...nums:number[]){
    let i;
    let sum:number = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];

    }
    console.log("numbers sum is " + sum)
}

addNumbers(1,2,3)
addNumbers(10,10,10,10,10)

// parametri predefiniti -> esempio una funzione che calcola un prezzo che ha uno sconto

function calculate_discount(price:number, rate:number = 0.50){ // dichiaro che nella funzione voglio un tipo di dato ed un valore
    let discount = price * rate
    console.log("Lo sconto ammonta a : ",discount)
}
calculate_discount(1000) // con questo mantengo il parametro della funzione
calculate_discount(1000,0.30) // mettendo il secondo parametro, sovrascrivo quello base della funzione che è sempre un numero

// funzioni anonime
let messaggio = function(){
    return "Hello WorlD"
}
console.log(messaggio())

//funzioni anonime con parametri

let res = function(a:number,b:number){
    return a*b
}
console.log(res(5,2))

// anche TS supporta il costruttore function
let myFunction = new Function("a","b","return a * b"); // qua interpreta i 2 valori (come numeri in questo caso e prende il comando return)
let x1 = myFunction(4,3)
console.log(x1)