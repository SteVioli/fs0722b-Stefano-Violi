let primo = document.getElementById('primo');
let precedente = document.getElementById('precedente');
let successivo = document.getElementById('successivo');
let ultimo = document.getElementById('ultimo');

let items = [
            { id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
            { id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
            { id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
            { id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A' },
            { id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
            { id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
            { id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A' },
            { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' },
        ]

class Pagina{
    constructor(id,nome,cognome,classe){
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.classe = classe;
    }
    compilaRiga(){
        let corpo = document.querySelector('tbody');
        corpo.innerHTML = `<tr><td>${items[0].id}</td><td>${items[0].nome}</td><td>${items[0].cognome}</td><td>${items[0].classe}</td></tr>`
    }
}

let riga1 = new Pagina(items[0]);
let riga2 = new Pagina(items[1]);
let riga3 = new Pagina(items[2]);
let riga4 = new Pagina(items[3]);
let riga5 = new Pagina(items[4]);
let riga6 = new Pagina(items[5]);
let riga7 = new Pagina(items[6]);
let riga8 = new Pagina(items[7]);

riga1.compilaRiga()

console.log(riga1);

primo.addEventListener('click',()=>{})
precedente.addEventListener('click',()=>{})
successivo.addEventListener('click',()=>{})
ultimo.addEventListener('click',()=>{})