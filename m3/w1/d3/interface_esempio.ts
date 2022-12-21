// interfacce è un contratto sintattico che stabilisce la sintassi a cui deve aderire qualsiasi entità
// le interfeacce definiscono proprietà/metodi che sono i membri dell'interfaccia (contengono solo le dichiarazioni dei membri)
// sarà nelle classi derivate che andremo a definire i membri -> fornisco una struttura standar che le classi seguono
interface Iperson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}

let customer:Iperson = {
    firstName: "Tom",
    lastName:"Hanks",
    sayHi: ()=>{return "hi there"}
}
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

let employe:Iperson = {
    firstName: "Giulio",
    lastName:"giuliani",
    sayHi: ()=>{return "bella brodi"}
}
console.log('----------------------')
console.log(employe.firstName)
console.log(employe.lastName)
console.log(employe.sayHi())

// ereditarietà

interface Person {
    age:number
}

interface Musician extends Person {
    instrument:string
}
let drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Batteria"
console.log('----------------------')
console.log("Age: " + drummer.age)
console.log("Instrument: " + drummer.instrument)
