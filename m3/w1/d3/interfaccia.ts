/*
    il type system è di tipo strutturale (structural type sistem)
    Il compiler quando fa il controllo / la comparazione dei tipi di dato si basa sulla struttura / forma
 
//function inviaMessaggio(msg: {email:string,messaggio:string}){
    //il paramentro indica che viene accettato un oggetto che ha almeno le properietà email e messaggio
   // mailSender.sendTo(msg.email, msg.messaggio);
    // al netto che non creo un oggeto mailSender perchè non mi interessa adesso
    let mioMessaggio = {email:"mario.rossi@epicode.it", messaggio:"Buongiorno!"}
    inviaMessaggio(mioMessaggio); // questa chiamata è corretta perchè ci sono i parametri attesi, ci sono email e messaggio

   // let mioMessaggio = { messaggio:"Buongiorno!"}
   // inviaMessaggio(mioMessaggio) // questa chiamata genera un errore, perchè quando compilo manca la proprietà email dell oggetto msg 

    // -> una volta che dichiariamo una struttura per il parametro della funzione, ts verifica che effettivamente venga passato un oggetto con quella struttura
//}
    // -> TypeScript consente la definizione di una interfaccia che definisce la struttura del nostro paramentro
    //la sua sintassi è 
    interface Messaggio {   //interface consente di definire il tipo di dato (messaggio nel nostro caso), TypeScript quando compila, verifica la struttura
        // facendo così potremo riutilizzare Messaggio come se fosse un tipo di dato predefinito (ad es. per riusarlo nella nostra applicazione)
        email:string;
        messaggio:string;
    }
    //function inviaMessaggio(msg:Messaggio){                //messo nei commenti molte cose perchè ci sono troppi errori, è solo teoria
        //mailSender.sendTo(msg.email,msg.messaggio);
   // }

    // la struttura dichiarata dall'interfaccia, rappresente gli elementi minimi che un oggetto deve avere

    let mioMessaggio = {
        email: "mario.rossi@epicode.it",
        messaggio: "Buongiorno!",
        data: new Date()
    }; // il fatto che la proprietà data non è prevista, non pregiudica il funzionamento perchè i parametro base di inviaMessaggio sono presenti
    inviaMessaggio(mioMessaggio);
    // -> all'interno di interface posso definire una struttura con elementi opzionali
    interface Messaggio {
        email:string;
        nomeDestinatario?: string;    // con il ? dichiaro elementi opzionali
        oggetto?: string;             // con il ? dichiaro elementi opzionali -> cioè accettati se sono presenti, ma non da errori se sono assenti
        messaggio: string
    }
*/
//le interfacce non descrivono solo oggetti ma anche altri elementi del linguaggio
//ad esempio definisco una funzione numerica che opera su valori numerici
interface FunzioneSuNumeri{
    (x:number,y:number):number       //prendo due valori numerici come parametro e restituisco un numero
}
// faccio una funzione del tipo appena dichiarato
let somma: FunzioneSuNumeri;
somma = function(a:number, b:number){  //dichiarare il tipo non ci obbliga ad usare gli stessi nomi dei parametri
    return a + b                       //l'unica cosa importante è che i tipi di parametri siano corrispondenti
}

// possiamo anche dichiarare delle interfacce che descrivono degli array
interface ArrayDiStringhe {
    [index:number]:string   //definisco il tipo dell'indice (number) e il tipo di ciascun elemento (string)
}
let x:ArrayDiStringhe = ["uno","due","tre"];

// per l'indice dell'array oltre al tipo number è previsto anche il tipo string
interface Dizionario{
    [index:string]:string
}
let yo:Dizionario;
//yo["chiave1"] = "valore1";
//yo["chiave2"] = "valore2";
//per l'indice i tipi di dati possibili sono solo number e string, per gli elementi dell'array qualsiasi tipo
//esempio: array di oggetti
interface ArrayDiOggetti{
    [index:number]: {
        id:number,
        label:string
    }
}
let x1:ArrayDiOggetti = [
    {id:1,label:"aaa"},
    {id:2,label:"bbb"},
]