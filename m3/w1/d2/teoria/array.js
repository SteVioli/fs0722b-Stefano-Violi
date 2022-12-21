var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[2]);
var nums = [1, 2, 3, 4, 5, 6];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[4]);
// posso anche creare un array usando l'oggetto array
// dentro l'oggetto array posso mettere un valore numerico che rappresenza la dimensione del mio array, oppure un elenco di valori separati da virgole
//array con valore numerico
var array_names = new Array(4); // questa è la dimensione del mio array ovvero tiene 4 indici
for (var i = 0; i < array_names.length; i++) {
    array_names[i] = i * 2; // qua dico per ogni indice che cicla di farmi *2,  (0x2, 1x2 ,2x2, 3x2)
    console.log(array_names[i]);
}
//elenco valori
var names = new Array("mary", "tom", "luca", "giulio");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//utilizzo di qualche metodo
//metodo pop che rimuove un elemento e lo restituisce -> array.pop()
var numbers = [1, 2, 9];
var element = numbers.pop(); //ha tolto 9 e me lo ha restituito, se lo ripeto mi darà 2
console.log(element);
//metodo push -> aggiunge l'elemento al contrario di pop e restituisce il nuovo array
var provaPush = numbers.push(10);
var provaPush1 = numbers.push(15);
console.log(numbers);
//destrutturazione di un array
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x); //adesso ho messo dei valori di un array in singole variabili
console.log(y);
//attraverso l'array con for
var j;
var numeri = [1001, 1002, 1003, 1004];
for (j in numeri) {
    console.log(numeri[j]);
}
//array multidimensionali ( ad esempio quello bidimensionale)
//let arr_name_bidimensionale:number[][] = [[val1,val2,valn],[v1,v2,v3]]
//un array può essere passato ad una funzione
var nomi = new Array("mary", "tom", "luca", "giulio");
function disp(array_names) {
    for (var i = 0; i < array_names.length; i++) {
        console.log(nomi[i]);
    }
}
disp(nomi);
