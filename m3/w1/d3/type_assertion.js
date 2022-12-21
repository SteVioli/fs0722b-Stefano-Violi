// type assertion ci permette di impostare il tipo di un valore e dice al compilatore di non modificarlo
// la usiamo quando abbiamo una comprensione migliore del tipo di dato rispetto a ciò che TypeScript deduce da solo
var code = 123;
var employeeCode = code; // sappiamo che il codice è un numero anche se era stato dichiarato any
// abbiamo asserito che in questo caso il codice è di tipo number
console.log(typeof (employeeCode)); // mi dice che è un number
var employee = { // uso l'interfaccia per fare l'asserzione di tipo
};
employee.name = "john"; // ora lo posso fare perchè effettivamente dentro employee esiste la proprietà name     
employee.code = 123; // ok
console.log(typeof (employee.name));
console.log(typeof (employee.code));
console.log(employee.name);
console.log(employee.code);
