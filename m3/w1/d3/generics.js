// i generics sono un modo per indicare ai miei costrutti classi interfacce funzioni, che tipo di dato si vuole usare al momento della chiamata
// funziona un pò come il passaggio di argomenti ad una funzione MA indica anche il tipo che deve aspettarsi alla chiamata
// quando li usiamo? -> quando abbiamo un'ampia gamma di dati diversi -> e quando usiamo quel tipo di dati in diversi punti
// i vantaggi sono la possibilità di riutilizzare questo codice, e ridurre la necessità di fare ricorso al tipo any
function getArray(items) {
    return new Array().concat(items);
}
// la funzione getArray genera un array di elementi di tipo any
// variabile numberArray che chiama la funzione getArray e passa dei valori numerici e strinArray cje passa stringhe
var numberArray = getArray([5, 10, 15, 20]);
var stringArray = getArray(["Cats", "Dogs", "Dolphins"]);
numberArray.push(25); //ok
stringArray.push("Rabbits"); //ok
numberArray.push("this is not a number"); //ok perchè sono any i valori dati
stringArray.push(12); //ok perchè sono any i valori dati
console.log(numberArray);
console.log(stringArray);
