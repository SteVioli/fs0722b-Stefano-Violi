let alphas:string[];
alphas = ["1","2","3","4"]
console.log(alphas[0])
console.log(alphas[2])


let nums:number[] = [1,2,3,4,5,6]
console.log(nums[0])
console.log(nums[1])
console.log(nums[4])

// posso anche creare un array usando l'oggetto array
// dentro l'oggetto array posso mettere un valore numerico che rappresenza la dimensione del mio array, oppure un elenco di valori separati da virgole


//array con valore numerico
let array_names:number[] = new Array(4) // questa è la dimensione del mio array ovvero tiene 4 indici
for (let i = 0; i < array_names.length; i++) {
    array_names[i] = i * 2    // qua dico per ogni indice che cicla di farmi *2,  (0x2, 1x2 ,2x2, 3x2)
    console.log(array_names[i])
    
}

//elenco valori

let names:string[] = new Array("mary","tom","luca","giulio")
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//utilizzo di qualche metodo

//metodo pop che rimuove un elemento e lo restituisce -> array.pop()
let numbers = [1,2,9]
let element = numbers.pop(); //ha tolto 9 e me lo ha restituito, se lo ripeto mi darà 2
console.log(element)
//metodo push -> aggiunge l'elemento al contrario di pop e restituisce il nuovo array
let provaPush = numbers.push(10)
let provaPush1 = numbers.push(15)

console.log(numbers)

//destrutturazione di un array
let arr:number[] = [12,13]
let[x,y] = arr
console.log(x) //adesso ho messo dei valori di un array in singole variabili
console.log(y)

//attraverso l'array con for
let j:any
let numeri:number[] = [1001,1002,1003,1004]
for (j in numeri){
    console.log(numeri[j])
}
//array multidimensionali ( ad esempio quello bidimensionale)
//let arr_name_bidimensionale:number[][] = [[val1,val2,valn],[v1,v2,v3]]

//un array può essere passato ad una funzione
let nomi:string[] = new Array("mary","tom","luca","giulio")
function disp(array_names:string[]){
    for (let i = 0; i < array_names.length; i++) {
        console.log(nomi[i]);
        
    }
}
disp(nomi)