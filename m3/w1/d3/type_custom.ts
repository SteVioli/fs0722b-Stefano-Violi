// tipo unione descrive un valore che può essere di diversi tipi
// lo usiamo quando un valore non è sotto il nostro controllo (ad esempio potrebbe essere sia string che number)
// no uso any per limitare i tipi possibili

let multiType:number | boolean;
multiType = 20           //valido
multiType = true        //valido    
//multiType = "Mirco"     //non valido

// ho valori che possono essere numeri o stringhe, se sono entrambi numeri somma, se sono stringhe concatena, altrimenti errore
function add(x:number | string , y:number | string){
    if(typeof x === 'number' && typeof y === 'number'){
        return x + y
    }
    if (typeof x === 'string' && typeof y === 'string'){
        return x.concat(y)
    }
    throw new Error("Parameters must be numbers or string");
    
}
console.log(add('one','two'))           //returns "onetwo"
console.log(add(1,2))                   //returns 3
console.log(add(1,'two'))               //returns error
