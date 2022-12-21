// overload list -> quando in una funzione dichiaro tipi diversi
// il compilatore di typescript cosa fa -> analizza la lista e cerca la compilazione corretta da invocare in base agli argomenti passati
// possiamo definire più funzioni con lo stesso nome, ma che hanno parametri diversi per numero e tipo
// possiamo avere valori di ritorno diversi
// 1. elenchiamo tutte le varie versioni che una funzione può avere (senza il corpo della funzione, ma con i tipi di parametri e valori di ritorno)
// 2. definisco le funzioni e assegno i diversi comportamenti
function somma(addendo1:number, addendo2:number):number;
function somma(addendi:number[]):number;
function somma(a:number | number[], b?:number){
    if(typeof a === "number"){
        return a + b
    }
    return a.reduce(
        (
            parziale:number,
            valoreCorrente:number,
            indiceCorrente:number,
            a:number []) => {
            return parziale + valoreCorrente;           
        });
}

console.log(somma(11,22));                  //33
console.log(somma([6,12,18,36]))            //72

