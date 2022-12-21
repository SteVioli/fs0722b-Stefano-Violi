// i generics sono un modo per indicare ai miei costrutti classi interfacce funzioni, che tipo di dato si vuole usare al momento della chiamata
// funziona un pò come il passaggio di argomenti ad una funzione MA indica anche il tipo che deve aspettarsi alla chiamata
// quando li usiamo? -> quando abbiamo un'ampia gamma di dati diversi -> e quando usiamo quel tipo di dati in diversi punti
// i vantaggi sono la possibilità di riutilizzare questo codice, e ridurre la necessità di fare ricorso al tipo any
function getArray(items:any[]):any[]{
    return new Array().concat(items);
}
// la funzione getArray genera un array di elementi di tipo any
// variabile numberArray che chiama la funzione getArray e passa dei valori numerici e strinArray cje passa stringhe
let numberArray = getArray([5,10,15,20]);
let stringArray = getArray(["Cats","Dogs","Dolphins"]);
numberArray.push(25)                    //ok
stringArray.push("Rabbits")             //ok
numberArray.push("this is not a number")//ok perchè sono any i valori dati
stringArray.push(12)                    //ok perchè sono any i valori dati
console.log(numberArray)
console.log(stringArray)

//ho un modo per stabilire il tipo di valori che la matrice tiene e che quindi TypeScript possa verificare che quel tipo è rispettato
// generics -> riscrivo la funzione getArray

function getArrayNew<T>(items:T[]):T[]{               //la <T> stabilisce il modello generico e quindi typescript sa che i valori dei tipi devono essere uguali
    return new Array<T>().concat(items);
}

// i generics definiscono una o più variabili tipo -> identificano i tipi di dato che vengono passati racchiusi tra < >
// T è un nome comunemente usato per prassi, ma potrei chiamarlo come voglio
// viene passato alla prima volta che lo dichiaro per popolare i miei items e il tipo totale della mia funzione
// nella funzione getArrayNew uso T per specificare (1)il tipo di parametri, (2)il tipo restituito dalla funzione e (3)restituisce la nuova matrice/il nuovo array
//adesso per richiamare la funzione, è sufficiente passare il <type> 
//-> getArrayNew<number> -> accetterà solo una matrice di valori numerici e restituirà una matrice di valori numerici

let numeroArray = getArrayNew<number>([5,10,15,20]);
numeroArray.push(25) //ok
//numeroArray.push("ciao") //mi dice che non va bene perchè ho dichiarato che deve essere un numero

let stringaArray = getArrayNew<string>(["Cats","Dogs","Dolphins"]);
stringaArray.push('asd') //ok
//stringaArray.push(15) //mi dice che non va bene perchè ho dichiarato che deve essere una stringa
// se si omette la variabile di tipo, sarà TypeScript a dedurla, ma funziona solo con dati semplici come numeri boolean string etc
// se utilizzo array o oggetti passa ad any




