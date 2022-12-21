var mytuple = [10, "hello", "World", "TypeScript"]; // i tipi sono diversi e li deduce
console.log(mytuple[0]);
console.log(mytuple[1]);
// per fare operazioni sulle tuple, sono supportati i metodi degli array
console.log("Items before push are: " + mytuple.length); //ritorna la lunghezza della tuple
mytuple.push(12); //appende il valore alla tuple
console.log("Items after push are: " + mytuple.length + " e sono: " + mytuple);
//le tuple sono mutabili e possono aggiornare i valori
mytuple[0] = 121;
console.log(mytuple);
// si possono anche destrutturare come un qualunque array
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
