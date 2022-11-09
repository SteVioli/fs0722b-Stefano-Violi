/*creo degli script per dire che al tasto invio deve generare un div con le proprietà di stile da me assegnate e riportando il VALORE di quello che l'utente scrive nell'input text, dovrebbe verificarsi un blocco contente il contenuto scritto precedentemente non editabile, ma provo a mettergli un tasto per poterlo cancellare o selezionare*/

document.querySelector('#binvio')
.addEventListener('click' , function(){
    let lista = document.querySelector('#testo1');
    let blocco = document.createElement('div');
    
    blocco.textContent = lista.value;
    blocco.classList.add('listaok')
    
    let finito = document.createElement('button')
    
    finito.textContent = 'Finito';

    finito.addEventListener('click', ()=>{
        blocco.classList.add('Finito');
        document.querySelector('#lista-terminata')
        .append(blocco)
    })
    blocco.append(finito);
    document.querySelector('#colonna').append(blocco)
    lista.value = '';

});

let cerca = document.querySelector('#cerca');

cerca.addEventListener('keyup', ()=> {
    
    let end = document.querySelectorAll('#testo1');

    console.log(end)


})







