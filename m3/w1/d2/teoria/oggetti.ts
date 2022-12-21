let person = { // un oggetto sta tra parenti {}
    firstname : "federico",
    lastname : "de ambrosis",
    sayHello:function(){} //type template
}
console.log(person.firstname)
console.log(person.lastname)
person.sayHello = function(){
    console.log("hello " + person.firstname)
}
person.sayHello() //devo invocarla

//person.sayHello = function(){return " Hello "}  in TypeScritp non puoi aggiungere parti agli oggetti, perchè in TS gli oggetti devono avere sempre un tipo (type template)
//per farlo devo definire un type template

// un oggetto può anche avere un parametro di funzione

let persona = {
    firstname : "Stefano",
    lastname : "Violi",
};
let invokePersona = function(obj:{firstname:string,lastname:string}){
    console.log("first name: " +obj.firstname)
    console.log("last name: "+obj.lastname )
}
invokePersona(persona)
