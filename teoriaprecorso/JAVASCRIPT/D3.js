/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('esercizio 1')

var a = 4;
var b = 5;
if(a > b){
  console.log('a è maggiore di b')
}else{
  console.log('b è maggiore di a')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('esercizio 2')

let a1 = 4;
if(a1 != 5){
  console.log('not equal')
}else{
  console.log('è uguale a 5')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('esercizio 3')

let a3 = 4;
if(a3 % 5 == 0){
  console.log('divisibile per 5')
}else{
  console.log('non divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('esercizio 4')

let a4 = 0;
let b4 = 8;
if(a4 == 8 || b4 == 8){
  console.log('il valore di uno dei due è 8')
}else if(a4 + b4 == 8 || a4 - b4 == 8 || b4 - a4 == 8){
    console.log('somma o sottrazione uguale a 8')
}else{
  console.log('non è 8 niente')
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('esercizio 5')

var totalShoppingCart = 30;
if(totalShoppingCart > 50){
  console.log('spedizione gratuita')
}else{
  var ammontareTotale = totalShoppingCart += 10;
  console.log('Addebitata la spediazione a 10 euro per un totale di ' + ammontareTotale + ' euro')
  
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('esercizio 6')
var totalShoppingCart = 40 * 0.8;
if(totalShoppingCart > 50){
  console.log('spedizione gratuita spesa complessiva è di ' + totalShoppingCart)
}else{
  var ammontareTotale = totalShoppingCart += 10;
  console.log('Addebitata la spediazione a 10 euro per un totale di ' + ammontareTotale + ' euro')
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 7");

var a7 = 400
var b7 = 70
var c7 = 80

if( a7 > b7 && b7 > c7){
  console.log(a7,b7,c7);
}else if(a7 > c7 && c7 > b7){
  console.log(a7,c7,b7);
}else if (b7 > a7 && a7 > c7){
  console.log(b7,a7,c7);
}else if (b7 > c7 && c7 > a7){
  console.log(b7,c7,a7);
}else if(c7 > a7 && a7 > b7){
  console.log(c7,a7,b7);
}else{
  console.log(c7,b7,a7);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('esercizio 8')

var x8 = '9';
console.log(typeof x8)


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('esercizio 9')

var x9 = 9;
if(x9 % 2 == 0){
  console.log('pari')
}else{
  console.log('dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

  
/* SCRIVI QUI LA TUA RISPOSTA */

  console.log('esercizio 10')
  let val = 10
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }





/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log('esercizio 11')
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log(me)



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('esercizio 12')

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('esercizio 13')

delete me.skills[2]
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('esercizio 14')
var es14 = [];
es14.push(1,2,3,4,5,6,7,8,9,10)
console.log(es14)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('esercizio 15')
es14.splice(9,10,100)//dove cosa e quanto
console.log(es14)



