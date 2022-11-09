/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

  /*function nome(f,g){
    let str1 = f.slice(0,2) + g.slice(-3);
    let str2 = str1.toUpperCase();
    return str2;
  }
  console.log(nome('Andrea','Tommaso'))*/
  /*concatenata('Giulio','Massimo')
  const concatenata = function(str1,str2){
    let partials = str1.slice(0,2) + str2.slice(str2.length-3)
    let finalString = partials.toUpperCase();
    console.log(finalString)
  }*/

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

/* let arr = [];
 for(let i = 0 ; i < 100 ; i++){
  if( i % 2 !=  0)(
    arr.push (i)
  );
 }
 console.log(arr)*/

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
/*let arr = [];
for(let i = 0 ; i < 101 ; i++){
  if( i % 5 === 0)(
    arr.push(i)
  );
}
console.log(arr)*/


/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

 /* let arr = [];
  for(let i = 0 ; i < 10 ; i++){
    arr.push(Math.round(Math.random()*100))// valore compreso tra 0 e 100
  }
  console.log(arr)*/

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

 /* const arr2 = function(arr){
    let evenArray = []
    for (let i = 0; i < arr.length ; i++){
      if(arr[i] % 2 === 0){
        evenArray.push(arr[i])
      }
    }
    console.log(evenArray)
  }
  let array = [34 , 67 ,85 ,35 ,100 , 4];
  arr2(array)*/
  
   

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

  


/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

/*function incrementArray (arrayDaIncrementare){
  for(let i = 0; i < arrayDaIncrementare.length; i++) {
    arrayDaIncrementare [i]++;
  }
  return arrayDaIncrementare;
}
console.log(incrementaArray(array))*/

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
/*let animali = ["Adinolfi", "Berlu", "Salvini"];
function strToNumArray(array) {
  let s = [];
  for (let u of array) {
    s.push(u.length);
  }
  return s;
}

console.log(strToNumArray(animali))*/

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
/*var lista5 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const deleteEven = function (arr) {

  let counter = 0;
  while (counter !== arr.length){//counter diverso dalla lunghezza dell'array
    if(arr[counter] % 2 === 0){
      arr.splice(counter , 1)
    } 

    counter++

  }
  return arr;
}
console.log(deleteEven(lista5))*/



/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

  /*const createRandomWithoutDuplicate = function (){ // funzione dichiarata

    let array = []                                                                  // creato array vuoto
    
    for (let i = 0; i < 10; i++) {                                         // ciclo for x scorrere elemento
    
        let added = false                                                            // valore booleano per rimanere nel ciclo while, nel    caso in cui IF venga verificato
        while(!added){                                                               // condizione che fa ripetere il ciclo finché non viene inserito un elemento.
          let numberToAdd = Math.ceil(Math.random()* 10)                            // in questo passaggio gli viene inserita una variabile random tra 1 e 100.
          if (!array.includes(numberToAdd)) {                                        // controlla se nell'array non è presente il numero appena inserito nella variabile.
            array.push(numberToAdd)                                                  // se non presente, va ad eseguire un push del numero generato
            added = true                                                             // in questo modo esce dal ciclo quando un elemento viene aggiunto all'array e va a ripere il ciclo for.
          }
        }
    
    }
    
    return array
    
    } 
    
    console.log(createRandomWithoutDuplicate())*/

    /*function arrayRandom(){ //creo la funzione arrayRandom che non richiede parametri in ingresso 
      let array = []; //creo un array vuoto chiamato array
      let numeroRandom = 0;  //creo la variabile numeroRandom nella quale verrà memorizzato un numero random (più avanti nel codice)
      let i = 0; // creo l'indice i utile per il ciclo while utile per il passagio successivo
      while( i < 10){ //apro il ciclo while e faccio ciclare fin che l'indice non sarà superiore a 10 (in questo caso quindi una volta chiuso il ciclo creerà un array di 10 elementi)
        numeroRandom = Math.floor(Math.random() * 11); //alla variabile numeroRandom affindo un numero random da 0 -10 incluso 
        if(!array.includes(numeroRandom)){ //avvio un if dove diro se in tutto l'array non esiste il valore presente nella variabile numeroRandom allora verifica la condizione interna
          array.push(numeroRandom); //se la condizione sara verificata nell if pusho nel nostro array la variabile numeroRandom
          i++; //aumento il contatore del while (in questo caso solo se la condizione del if sarà verificata)
        }
    
      }
      return array;//ritorno l'array
    
    }
    
    let array = arrayRandom()
    
    console.log(array);*/




/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let arrayDaInvertire = [1,2,3]
function inversione(array){
  return array.reverse()
}
console.log(inversione(arrayDaInvertire))

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
