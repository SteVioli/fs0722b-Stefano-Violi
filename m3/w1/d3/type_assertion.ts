// type assertion ci permette di impostare il tipo di un valore e dice al compilatore di non modificarlo
// la usiamo quando abbiamo una comprensione migliore del tipo di dato rispetto a ciò che TypeScript deduce da solo
let code: any = 123
let employeeCode = <number> code  // sappiamo che il codice è un numero anche se era stato dichiarato any
                                  // abbiamo asserito che in questo caso il codice è di tipo number
console.log(typeof(employeeCode)) // mi dice che è un number

//let employee = {};
//employee.name = "john" //errore->proprietà name non esiste nel type {}

interface Employee {        //uso l'interfaccia per definire la struttura delle variabili
    name:string;
    code:number;
}

let employee = <Employee> {     // uso l'interfaccia per fare l'asserzione di tipo
    
}
employee.name = "john"          // ora lo posso fare perchè effettivamente dentro employee esiste la proprietà name     
employee.code = 123             // ok
console.log(typeof(employee.name))
console.log(typeof(employee.code))
console.log(employee.name)
console.log(employee.code)
