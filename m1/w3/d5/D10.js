/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log('esA fatto' )
/*
var sum = (10+20) // creato variabile che contiene una somma
console.log(sum)*/

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('esB fatto')
/*
var random = Math.floor(Math.random()*20)+1; // variabile random che contiene metodi matematici che prima non tiene conto dei decimali e poi genera numeri randomici (metto 21 perchè considera il numero indicato escluso)
console.log(random)
*/
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('esC fatto')
/*
var me = {//creato variabile me poi apro le graffe per inserire le relative proprietà e valori che mi vengono chieste
  name:'Stefano',
  surname:'Violi',
  age: 34
}
console.log(me)
*/
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('esD fatto')
/*
delete me.age; //rimuovo la proprietà con il comando delete facendo riferimento alla proprietà age che appartiene a (me)


console.log(me)
*/
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/


console.log('esE fatto')
/*
me['skills'] =['Javascript'] //indico che a (me) voglio inserire un altra proprietà (skills) che ha come valore in questo (javascript)
console.log(me)
*/


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('esF fatto')
/*
me.skills.push('CSS') //metto con push valore CSS in ultima posizione

console.log(me)
*/

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('esG fatto')
/*
me.skills.pop()//comando pop leva ultimo elemento di "skills" di (me)

console.log(me)

*/

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('es1 fatto')

/*
function dice(){
  let dice = Math.floor(Math.random()*(6-1))+1 // stessa cosa della variabile precedente, messa dentro a una funzione che richiamandola mi genera "dice"
  console.log(dice)
}
dice()
*/


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('es2 fatto')

/*
function whoIsBigger(a2,b2){
  a2 = 8;
  b2 = 1;
  if(a2 > b2){
    console.log(a2)
  }else{
    console.log(b2)
  }
}
whoIsBigger()
*/

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('es3 fatto')

/*
function splitMe(a){
  a = 'I love coding';
  arrStr = a.split(' ') //creo la mia variabile stringa, a seguire nuova variabile che dando il comando split alla precendete, mi separa(split) gli elementi in questo caso dallo spazio " " e me li riporta come array
  console.log(arrStr)

}

splitMe()

*/

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('es4 fatto')

/*
function deleteOne(a,b){
  a = 'Stringa';
  b = false;
  if(b === true){
    let c = a.substr(1,7)
    console.log(c)
  }else{
    let d = a.substr(0,6)
    console.log(d)
  }
}

deleteOne()
*/

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('es5 fatto')

/*
function onlyLetters(a){
  a = 'I have 4 dogs 45 asini e 180 cammelli';
  let b = a.replace(/[0-9]/g , ''); // creo variabile con comando replace che mi sostituisce i numeri da 0 a 9 e dopoe le 2 // metto g perchè voglio che sia globale, non solo la prima volta che li incontra, e secondo valore '' che sostituisce i numeri
  console.log(b)
}

onlyLetters()

*/
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('es6')



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('es7 fatto')

/*
function whatDayIsIt(){
  let day = new Date().toLocaleDateString('it-it' , {weekday : "short"}) // creo una variabile che mi crea una data nuova, in particolare chiedo di prendere in stringa la data corrente del mio browser e specifico che voglio solo il carattere della settimana in modalità short, (ven) oppure in modalità long ( venerdì)
  console.log(day)
}

whatDayIsIt()

*/

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().


  


  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('es8')


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('es9 fatto')


/*function howManyDays(){

  let dataUno = new Date('01/01/2010');   // creo la funziona dando a due variabili i valori di 2 date (1 selezionata da me e l altra quella di default del browser)
  let dataNew = new Date();

  const giorniNew = (dataUno, dataNew) =>{             // creo un altra funzione che mi faccia la differenza tra le 2 date
      let diff = dataUno.getTime() - dataNew.getTime();
      let sum = Math.ceil(diff / (1000 * 3600 * 24));   
      return sum;
  }
  console.log(" abbiamo " + giorniNew(dataUno, dataNew) + " giorni tra le due date");
}

howManyDays()*/

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('es10')

/*function es10(){
  let mioCom = new Date();
  mioCom.setDate('27');   //ho settato tutti i parametri della mia data di nascita nella variabile mioCom.
  mioCom.setFullYear('2022')
  mioCom.setMonth('11')
  let oggi = new Date();

  if(mioCom == oggi){
    console.log('è il mio compleanno')     //aperto degli if che come condizione true se le due variabili mioCom e oggi fossero uguali 
  }else{
    console.log('non è il mio compleanno') //se non fossero uguali
  }
}
es10()*/






// Arrays & Oggetti
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('es11 FORSE')

/*const eS11 = {
  a : 'Prova',
  b : 'Fine',
}

function deleteProp(){   //non l ho capito questo, l ho inteso come volesse eliminare il secondo paramentro e far ritornare solo il primo
  delete b['Fine']
  return a
}

let fine = deleteProp()

deleteProp()*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('es12 fatto')

/*function newestMovie(){
  let a = []
for (let i = 0; i < movies.length; i++) { //ciclo gli indici per la lunghezza degli oggetti di movies
    let b = movies[i].Year // do a b il valore indice di Year
    a.push(b)
    }
    a.sort((a,b)=>a-b)  // ordino secondo formula dal + piccolo al + grande

    console.log(a(a.length -1)) // seleziono l ultimo indice dell'array tramite la lunghezza-1
    }

newestMovie()*/




/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('es13 fatto')


/*
function countMovies(){
  let a = movies.length; // in questo caso è sufficiente richiamare la lunghezza di movies, in quanto unico array presente
  console.log(a)
}
 countMovies()

 */
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('es14 fatto')
/*
let anniNuovi = [];
function onlyTheYears(){
  for (let i = 0 ; i < movies.length; i++){ // ho creato un array fittizio dove metterò i dati interessati, ho ciclato col for tutta la lunghezza di movie. dato una variabile che mi prenda come indice ogni "posizione" di Year, dopo ho pushato all'interno del mio array fittizio quello che ho trovato
    let anni = movies[i].Year;
    anniNuovi.push(anni);
  }
  console.log(anniNuovi)
}
onlyTheYears()
*/    

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('es15')

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('es16 fatto')

/*const somma = 0;
function es16(){
      let i = 0;  
      while (i < movies.lenght){ //dopo aver dato variabile i = 0 faccio fare la somma si (somma che è 0 data da me + il valore numerico di tutti gli indici di Year converiti come numeri)
        somma += parseInt(movies[i].Year);
        i++
      }
      console.log(somma)
      }
es16()

es16()
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('es17 fatto')

/*function searchByTitle(titoli){
  let nomi = [];          //creo un array vuoto
  let sel;                //do una variabile che rimane non definita
  for(let i = 0 ; i < movies.length; i++){   //ciclo la lunghezza degli indici di movies selezionando gli indici dei titoli
    nomi.push(movies[i].Title);
  }
  sel = nomi.filter(a => a.includes(titoli)); //definisco la variabile precedente includendo nell array vuoto i titoli,e definendo la variabile come motore dei ricerca tramite il filter
  console.log('film selezionati: '+ sel); 
  return sel
}
searchByTitle('Lord of War')*/



/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('es18')

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('es19')













// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)






/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('es20 fatto')
/*
function es20(){
  document.querySelector('#container')
}
es20()*/


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('es21 fatto')
 /*function td(){
  let a = document.querySelectorAll("td"); // tramite una funzione, una variabile mi permette di selezionare tutti i tag td
  console.log(a)
}
 td()*/


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('es22 fatto')

/*
const a = document.querySelectorAll('td');
function es22(){    
    for(let i = 0 ; i < a.length ; i++ ){  //ciclo tutta la lunghezza di a ( che richiama tutti i tag <td>), poi dico che ad ogni indice trovato  di aggiungere tramite innerHTML un testo
    let tdNew = a[i].innerHTML('testo fittizio');
  }
}
es22() //lancio la funzione
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log('es23 fatto')

/*function es23(){
  let a = document.querySelectorAll('a')// richiamo al documento tutti i tag <a> che contengono i link
  for (let i = 0; i < a.length; i++){//ciclor for per dare un indice di lunghezza a tutti i miei tag
    a[i].style.backgroundColor = "red"//applico il colore rosso dando stile ad ogni indice creato
  }
};
es23() //richiamo la funzione*/



/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log('es24 fatto')

/*function es24(){
  let a = document.querySelector('#myList'); // due variabili uno che mi richiama l'elemento con id my list
  let b = document.createElement('p');      //  l'altro mi crea un elemento ( ho scelto un paragrafo 'p')
  b.textContent = 'Valore nuovo'; // do un valore ( un testo per il mio paragrafo in questo caso)
  a.append(b) // faccio risalire-collegare i nodi del figlio al padre
}

es24() // lancio la funzione */
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('es25 fatto')
/*function es25(){
  
  let a = document.querySelector('#myList') //richiamo il mio elemento che ha l id myList
  let b = a.removeAttribute(''); //remove attribute mi leva tutto quello che ho assegnato all'id my list (in questo caso non c'era niente altrimenti avrei potuto specificarlo con text content o altro)
  console.log(b)
}

es25()*/
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('es26 fatto')
/*function es26(){
    let tr = document.querySelectorAll("tr") // richiamo tutti i tag <tr>
    for (let i = 0; i < tr.length; i++) {  // do una lunghezza numerica ai miei tag <tr> e faccio partire un ciclo for
      tr[i].classList.add("test");  //richiamando ogni indice aggiungo la classe "test"
  }
    console.log(tr) 
  }
  
  es26()//richiamo funzione*/



// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

