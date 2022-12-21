// utilizzo di più variabili tipo
// funzione identity che accetta 2 paramentri diversi -> posso usare 2 generics T , U e assegno tipo diversi a ogni parametro e a ogni tipo
function identity<T,U> (value:T,message:U) :T{
    console.log(message);
    return value
}
// inizializzo una variabile chiamando la funzione idenity e assegno i tipi di dato per gli argomenti (value e message)
let restituisciNumero = identity<number,string>(100,"ciao");
let restituisciStringa = identity<string,string>("100","hola")
let restituisciBoolean = identity<boolean,string>(true,"hola")

//TypeScript controlla il tipo di dati e restituisce un errore se si verifica un conflitto
restituisciNumero = restituisciNumero *100      //ok
//restituisciStringa = restituisciStringa *100  //da errore perchè non posso assegnare number a string
//restituisciBoolean = restituisciBoolean *100    //da errore perchè non posso assegnare number a boolean