function Check(n1, n2) {
    var limite = Math.floor(Math.random() * 10);
    console.log(limite);
    var diff_1 = Math.abs(n1 - limite);
    console.log(diff_1);
    var diff_2 = Math.abs(n2 - limite);
    console.log(diff_2);
    if (n1 == limite) {
        console.log("il primo utente ha indovinato il numero");
    }
    else if (n2 == limite) {
        console.log("il secondo utente ha indovinato il numero");
    }
    else {
        if (diff_1 < diff_2) {
            console.log("il primo utente con il numero: " + n1 + " si è avvicinato rispetto al secondo utente che ha dichiarato " + n2 + " perchè ha uno scarto di " + diff_1);
        }
        else {
            console.log("il secondo utente con il numero: " + n2 + " si è avvicinato rispetto al primo utente che ha dichiarato " + n1 + " perchè ha uno scarto di " + diff_2);
        }
    }
}
Check(5, 8);
function lunghezzaStringa(s1, s2) {
    if (s1 == "" || s2 == "") {
        console.log("metti dei valori!!!!");
    }
    else {
        console.log(s1.length);
        console.log(s2.length);
        var diffString = Math.abs(s1.length - s2.length);
        if (s1.length == s2.length) {
            console.log("stesso numero di caratteri");
        }
        else {
            if (s1.length < s2.length) {
                console.log("la prima parola è più corta della seconda per un numero di " + diffString + " caratteri");
            }
            else {
                console.log("la seconda parola è più corta della prima di " + diffString + " caratteri");
            }
        }
    }
}
lunghezzaStringa("", "bobo");
