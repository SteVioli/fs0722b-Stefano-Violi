var n:number = 5
while(n > 5) {
    console.log("entered while")
}
do {
    console.log("entered do while")
}
while(n>5)

let i:number = 1
while (i <= 10){
    if (i % 5 == 0){
        console.log("primo multiplo di 5 tra 1 e 10 è : "+i)
        break //exit the loop
    }
    i++
}

let numero:number = 0
let count:number = 0
for(numero = 0; numero <= 20 ; numero++){
    if(numero % 2 == 0){
        continue
    }
    count++
}
console.log("the count of odd values between 0 and 20 is:" + count)