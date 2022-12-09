let blocco_contenitore = document.querySelector('.container');
//dichiarato una variabile che tiene conto del "contenitore nel quale far comparire i miei files"
//console.log(blocco_contenitore);

fetch("../esercizio/JS-Json/users.json")  //richiamo il fetch sull url (in questo caso un file json in locale)
    .then(response => response.json()) // chiamata 
    .then(result => {
        result.forEach(el => {  //ciclo for each , dove richiedo [sempre partendo dal punto di partenza che è richiamare la mia fonte] che per ogni indice dell'array ottenuto, voglio "pescare l'immagine , il nome e il cognome associato"
                let cartaUtente = document.createElement('div.');
                cartaUtente.classList.add('card'); 
                cartaUtente.classList.add('m-4');
                cartaUtente.classList.add('text-center');
                blocco_contenitore.append(cartaUtente);
                cartaUtente.innerHTML +=`<div><img class="rounded-circle mt-2" src = "${el.profileURL}"></div>`;
                cartaUtente.innerHTML +=`<div class="card-body text-center"><h5>${el.firstName} ${el.lastName}</h5><a href="#" class="text-decoration-none text-warning">${el.email}</a></div>`
                //faccio terminare tutto all'interno di un div che genero a riga 15, poi passo a dargli le classi utilizzando quelle di bootstrap, visto che ho fatto l'html tramite quello
                //faccio risultare all'interno del mio "blocco" dichiarato all'inizio quello che ottengo all interno del ciclo (riga 19)
                //dopo vado a sommare in ordine di comparsa quello che mi serve, ovvero immagine con relative classi e [i].profileUrl e stessa cosa per la parte di testo di [i].firstName [i].lastName e infine il mio href presente in <a> [i].mail
                // questo codice può essere utilizzato anche se il file json avesse avuto 200 indici del suo array
        });
    })

   