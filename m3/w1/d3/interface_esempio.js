var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "hi there"; }
};
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employe = {
    firstName: "Giulio",
    lastName: "giuliani",
    sayHi: function () { return "bella brodi"; }
};
console.log('----------------------');
console.log(employe.firstName);
console.log(employe.lastName);
console.log(employe.sayHi());
var drummer = {};
drummer.age = 27;
drummer.instrument = "Batteria";
console.log('----------------------');
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.instrument);
