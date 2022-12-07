salvaIlDato = function(info_da_salvare){
    localStorage.ultimo_pensiero = info_da_salvare;
    alert('Memorizzazione Effettuata');
};
recuperaIlDato =function(elemento){
    if(confirm('Sostituire il contenuto attuale con l ultimo pensiero memorizzato')){
        elemento.value = localStorage.ultimo_pensiero;
    }
};
