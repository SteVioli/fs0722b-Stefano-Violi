/*
    il type system è di tipo strutturale (structural type sistem)
    Il compiler quando fa il controllo / la comparazione dei tipi di dato si basa sulla struttura / forma
*/
function inviaMessaggio(msg) {
    //il paramentro indica che viene accettato un oggetto che ha almeno le properietà email e messaggio
    // mailSender.sendTo(msg.email, msg.messaggio);
    // al netto che non creo un oggeto mailSender perchè non mi interessa adesso
    var mioMessaggio = { email: "mario.rossi@epicode.it", messaggio: "Buongiorno!" };
    inviaMessaggio(mioMessaggio); // questa chiamata è corretta perchè ci sono i parametri attesi, ci sono email e messaggio
    // let mioMessaggio = { messaggio:"Buongiorno!"}
    // inviaMessaggio(mioMessaggio) // questa chiamata genera un errore, perchè quando compilo manca la proprietà email dell oggetto msg 
    // -> una volta che dichiariamo una struttura per il parametro della funzione, ts verifica che effettivamente venga passato un oggetto con quella struttura
}
