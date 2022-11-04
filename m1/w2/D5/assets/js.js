alert('Ciao Luca, cerca di darmi un bel voto dajeeeeeee')
alert('So che può sembrare infantile come design, ma ho provato a testare alcune cose ahahah')
function aggiungiCifra(bottone){

    document.getElementById("numeri").value += bottone.getAttribute('data-simbolo');

}

function tot(){
    let numeri = document.getElementById("numeri");
    numeri.value = eval(numeri.value);
}

function del(){
    numeri.value = '';
}
