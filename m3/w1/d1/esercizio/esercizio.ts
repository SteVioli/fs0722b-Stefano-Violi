function Check(n1:number,n2:number){
    let limite:number = Math.floor(Math.random()* 10)
    console.log(limite)
    let diff_1:number = Math.abs(n1-limite)
    console.log(diff_1)
    let diff_2:number = Math.abs(n2-limite)
    console.log(diff_2)
    if(n1 == limite){
        console.log("il primo utente ha indovinato il numero")
    }else if(n2 == limite){
        console.log("il secondo utente ha indovinato il numero")
    }else{
        if(diff_1 < diff_2){
            console.log("il primo utente si è avvicinato con il numero: " + n1 + " rispetto al primo utente che ha dichiarato " + n2 + " perchè ha uno scarto di " + diff_1)
        }else{
            console.log("il secondo utente si è avvicinato con il numero: " + n2 + " rispetto al secondo utente che ha dichiarato " + n1 + " perchè ha uno scarto di " + diff_2)
        }
    }
}
Check(5,8)

function lunghezzaStringa(s1:string,s2:string){
    console.log(s1.length)
    console.log(s2.length)
    let diffString = Math.abs(s1.length - s2.length)
    if(s1.length == s2.length){
        console.log("stesso numero di caratteri")
    }
    else{
        if(s1.length < s2.length){
            console.log("la prima parola è più corta della seconda per un numero di " + diffString + " caratteri")
        }else{
            console.log("la seconda parola è più corta della prima di " + diffString + " caratteri")
        }
    }
}

lunghezzaStringa("giulio","bobo")