/*
███████╗███████╗████████╗ ██████╗██╗  ██╗
██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║
█████╗  █████╗     ██║   ██║     ███████║
██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║
██║     ███████╗   ██║   ╚██████╗██║  ██║
╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝
                                         
*/
fetch("Abbigliamento.json")
    .then(function (response) { return response.json(); })
    .then(function (result) {
    console.log(result);
    /*
     ██████╗██╗      █████╗ ███████╗███████╗
    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝
    ██║     ██║     ███████║███████╗███████╗
    ██║     ██║     ██╔══██║╚════██║╚════██║
    ╚██████╗███████╗██║  ██║███████║███████║
     ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
                                            
    */
    var AbbigliamentoStandard = /** @class */ (function () {
        function AbbigliamentoStandard(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
            this.id = id;
            this.codprod = codprod;
            this.capo = capo;
            this.modello = modello;
            this.quantita = quantita;
            this.colore = colore;
            this.prezzoivaesclusa = prezzoivaesclusa;
            this.prezzoivainclusa = prezzoivainclusa;
            this.disponibile = disponibile;
            this.saldo = saldo;
        }
        AbbigliamentoStandard.prototype.getSaldoCapo = function () {
            return Math.ceil((this.prezzoivainclusa / 100) * this.saldo);
        };
        AbbigliamentoStandard.prototype.getAcquistoCapo = function () {
            return (this.prezzoivainclusa - (this.getSaldoCapo())).toFixed(2);
        };
        return AbbigliamentoStandard;
    }());
    /*
    ███████╗ ██████╗ ██████╗     ███████╗ █████╗  ██████╗██╗  ██╗
    ██╔════╝██╔═══██╗██╔══██╗    ██╔════╝██╔══██╗██╔════╝██║  ██║
    █████╗  ██║   ██║██████╔╝    █████╗  ███████║██║     ███████║
    ██╔══╝  ██║   ██║██╔══██╗    ██╔══╝  ██╔══██║██║     ██╔══██║
    ██║     ╚██████╔╝██║  ██║    ███████╗██║  ██║╚██████╗██║  ██║
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
                                                                 
    */
    result.forEach(function (el) {
        var abbigliamentoSpecifico = new AbbigliamentoStandard(el.id, el.codprod, el.collezione, el.capo, el.modello, el.quantita, el.colore, el.prezzoivaesclusa, el.prezzoivainclusa, el.disponibile, el.saldo);
        console.log(abbigliamentoSpecifico);
        console.log("Articolo n\u00B0 ".concat(el.id, ", codice identificativo: ").concat(el.codprod, " \u00E8 di tipo ").concat(el.capo, ", modello ").concat(el.modello, " di colore ").concat(el.colore, ": disponibile per ").concat(el.quantita, " unit\u00E0, giacenza in ").concat(el.disponibile, ", ha uno sconto del ").concat(el.saldo, "%."));
        console.log("Viene venduto anzich\u00E8 al prezzo pieno di ".concat(el.prezzoivainclusa, "\u20AC, a ") + abbigliamentoSpecifico.getAcquistoCapo() + "\u20AC .Con un risparmio di " + abbigliamentoSpecifico.getSaldoCapo() + "\u20AC sul prodotto");
        console.log('-------------------------');
        /*
        ██████╗ █████╗ ██████╗ ████████╗███████╗
        ██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
        ██║     ███████║██████╔╝   ██║   █████╗
        ██║     ██╔══██║██╔══██╗   ██║   ██╔══╝
        ╚██████╗██║  ██║██║  ██║   ██║   ███████╗
        ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                     
        */
        var blocco = document.querySelector('.row');
        var cartaArticolo = document.createElement('div');
        cartaArticolo.classList.add('col-lg-4');
        cartaArticolo.classList.add('col-12');
        cartaArticolo.classList.add('col-md-6');
        cartaArticolo.innerHTML += "\n            <div class=\"card mt-2 d-flex justify-content-center shadow-lg p-3 mb-5 bg-body rounded\">\n            <img src=\"".concat(el.img, "\" class=\"card-img-top mt-1\">\n            <div class=\"card-body justify-content-center p-0\">\n                <h5 class=\"card-title text-center\">").concat(el.capo, " ").concat(el.collezione, "</h5>\n                <p class=\"card-text\">Risparmia <span class=\"risparmio\">") + abbigliamentoSpecifico.getSaldoCapo() + "\u20AC </span>grazie allo sconto del <span class=\"saldo\">".concat(el.saldo, "%</span>. Per un totale di <span class=\"fs-2\">") + abbigliamentoSpecifico.getAcquistoCapo() + "\u20AC</span></p>\n                \n                \n            </div>\n            <a class=\"btn btn-primary text-center\">Acquista!</a>\n            <p>Disponibilit\u00E0 in <span class=\"text-success\">".concat(el.disponibile, "</span></p><p> Quantit\u00E0 disponibili <span class=\"text-danger\">").concat(el.quantita, "</span></p>\n            </div>");
        blocco.append(cartaArticolo);
    });
    /*
       Utilizzo elementi dom OK , parte css e html molto veloce e immediata
       Devo rivedere come utilizzare al meglio la nomenclatura per i vari session storage perchè funzionavano ma riportavano errori sballati, troppa roba per 4 giorni, ma bene così si procede bene.
       Continuo a ribadire che apportare esempi pratici e teoria scritta a mano da noi in ogni esercizio, sia una strada vincente
       */
});
