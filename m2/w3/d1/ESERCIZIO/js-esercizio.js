let firstName = document.getElementById('nome');
let surName = document.getElementById('cognome');
let age = document.getElementById('data');
//let button = document.getElementById('buttonAdd');
let form = document.getElementById('utenti');

form.addEventListener('submit',addNewUser);

//button.addEventListener('click', addNewUser);

function addNewUser(event){
    event.preventDefault();
    let nome = firstName.value;
    let cognome = surName.value;
    let eta = age.value;
    
    let utente = new Persona(nome,cognome,eta);
    console.log(utente);
    utente.tabella();
    
};

function Persona(nome,cognome,eta){
    this.userName = nome;
    this.surName = cognome;
    this.eta = eta;
    this.tabella = function(){
        let tabCompleta = document.querySelector('.table');
        let riga = document.createElement('tr');
        let riga2= document.createElement('td');
        let riga3= document.createElement('td');
        riga.append(riga2);
        riga.append(riga3);
        riga2.textContent = this.userName + " " + this.surName;
        let newDate = new Date();
        let dataGiorni = new Date(this.eta);
        riga3.textContent = newDate.getFullYear() - dataGiorni.getFullYear();
        tabCompleta.append(riga);
    }
}


