/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Abbiamo 5 principali tipi di datatype (elenco i tipi con annessi esempi e spiegazioni)
STRING: var stringa='Ciao'; è una variabile di tipo string, in quanto SEMPRE dentro agli apici o le "" , indica un testo, javascript così riconosce una variabile testuale o stringa

NUMBER: var numero= 3; è una variabile di tipo number, indica un valore numerico

BOOLEAN: var booleana= true/false ; è di tipo booleano e indica la veridicità della nostra variabile (può essere SOLO vera o falsa)

ARRAY: var array = [1,5,8,0,'Ciao',[]] è un contenitore di più valori che essi siano stringhe,numeri,booleani per esempio, fondamentale per separare i nostri valori dobbiamo usare le , 

OGGETTO: var oggetto = {}  gran parte delle volte dentro le graffe , anche qui sono liste ma sono coppie di valori separate con una virgola e solo all'interno dell oggetto sono indicati dopo i : all'interno di un oggetto altrimenti sarebbe stato l'uguale se fosse fuori





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name = 'Stefano'
console.log(name)
console.log(typeof name) /*qua si vede il tipo della nostra variabile, in questo caso stringa*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/* posso sia sommare dando un valore alle variabili che utilizzando i numeri*/

console.log(12 + 20) //=> 32 per vedere la somma dalla console
var n1 = 12;
var n2 = 20;
console.log(n1 + n2); //=32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* riporto qua solo per aver tutto nella stessa riga*/
var name = 'Stefano'
var name = 'Violi'
console.log(name)
/* se avessi utilizzato il construtto CONST una volta dato il valore sarebbe impossibile o comunque dato per errore dalla console il nuovo valore*/
const NOME = 'Stefano'
console.log(NOME)
/*const NOME = 'Violi'
console.log(NOME) lascio nei commenti altrimenti da errore su tutto */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x) //=> -8 se era questa l operazione richiesta, altrimenti cambiamo l ordine in (x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = ('john');
var name2 = ('John');
console.log(name1 != name2)//=> True

if(name1 == name2){
  console.log(true)
}