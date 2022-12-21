// tipi letterali possiamo definire un set customizzato di valori possibili
// non solo string, number , boolean ma che valori esatti una strina, un numero o un booleano devono avere
// riduzione -> elenco i casi potenziali possibili
type testResult = "passato" | "fallito" | "incompleto"
let myResult: testResult; // i valori possibili sono quelli che ho elencato
myResult = "incompleto";  // valida  
myResult = "passato";     // valida
//myResult = 43;            // non valida

// i tipi letterali hanno anche valori numerici

type dado = 1 | 2 | 3 | 4 | 5 | 6
let tiroDado:dado;
tiroDado = 3                  // valido
tiroDado = 5                  // valido
//tiroDado = 12               // non valido


