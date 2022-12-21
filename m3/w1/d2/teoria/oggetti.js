var person = {
    firstname: "federico",
    lastname: "de ambrosis",
    sayHello: function () { } //type template
};
console.log(person.firstname);
console.log(person.lastname);
person.sayHello = function () {
    console.log("hello " + person.firstname);
};
person.sayHello(); //devo invocarla
//person.sayHello = function(){return " Hello "}  in TypeScritp non puoi aggiungere parti agli oggetti, perchè in TS gli oggetti devono avere sempre un tipo (type template)
//per farlo devo definire un type template
// un oggetto può anche avere un parametro di funzione
var persona = {
    firstname: "Stefano",
    lastname: "Violi"
};
var invokePersona = function (obj) {
    console.log("first name: " + obj.firstname);
    console.log("last name: " + obj.lastname);
};
invokePersona(persona);
