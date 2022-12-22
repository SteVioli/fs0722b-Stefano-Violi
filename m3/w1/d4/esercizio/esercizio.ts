/*
███████╗███████╗████████╗ ██████╗██╗  ██╗
██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║
█████╗  █████╗     ██║   ██║     ███████║
██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║
██║     ███████╗   ██║   ╚██████╗██║  ██║
╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝
                                         
*/

fetch("Abbigliamento.json")
    .then(response => response.json())
    .then(result => {
        console.log(result)

        /*
         ██████╗██╗      █████╗ ███████╗███████╗
        ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝
        ██║     ██║     ███████║███████╗███████╗
        ██║     ██║     ██╔══██║╚════██║╚════██║
        ╚██████╗███████╗██║  ██║███████║███████║
         ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
                                                
        */
        class AbbigliamentoStandard {
            id: number;
            codprod: number;
            collezione: string;
            capo: string;
            modello: number;
            quantita: number;
            colore: string;
            prezzoivaesclusa: number;
            prezzoivainclusa: number;
            disponibile: string;
            saldo: number
            constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
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
            getSaldoCapo(): number {
                return Math.ceil((this.prezzoivainclusa / 100) * this.saldo)
            }
            getAcquistoCapo(): any {
                return (this.prezzoivainclusa - (this.getSaldoCapo())).toFixed(2)
            }
        }
        /*
        ███████╗ ██████╗ ██████╗     ███████╗ █████╗  ██████╗██╗  ██╗
        ██╔════╝██╔═══██╗██╔══██╗    ██╔════╝██╔══██╗██╔════╝██║  ██║
        █████╗  ██║   ██║██████╔╝    █████╗  ███████║██║     ███████║
        ██╔══╝  ██║   ██║██╔══██╗    ██╔══╝  ██╔══██║██║     ██╔══██║
        ██║     ╚██████╔╝██║  ██║    ███████╗██║  ██║╚██████╗██║  ██║
        ╚═╝      ╚═════╝ ╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
                                                                     
        */

        result.forEach(el => {
            let abbigliamentoSpecifico = new AbbigliamentoStandard(el.id, el.codprod, el.collezione, el.capo, el.modello, el.quantita, el.colore, el.prezzoivaesclusa, el.prezzoivainclusa, el.disponibile, el.saldo)
            console.log(abbigliamentoSpecifico)
            console.log(`Articolo n° ${el.id}, codice identificativo: ${el.codprod} è di tipo ${el.capo}, modello ${el.modello} di colore ${el.colore}: disponibile per ${el.quantita} unità, giacenza in ${el.disponibile}, ha uno sconto del ${el.saldo}%.`)
            console.log(`Viene venduto anzichè al prezzo pieno di ${el.prezzoivainclusa}€, a ` + abbigliamentoSpecifico.getAcquistoCapo() + `€ .Con un risparmio di ` + abbigliamentoSpecifico.getSaldoCapo() + `€ sul prodotto`)
            console.log('-------------------------')

            /*
            ██████╗ █████╗ ██████╗ ████████╗███████╗
            ██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
            ██║     ███████║██████╔╝   ██║   █████╗  
            ██║     ██╔══██║██╔══██╗   ██║   ██╔══╝  
            ╚██████╗██║  ██║██║  ██║   ██║   ███████╗
            ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                         
            */

            let blocco = <HTMLElement>document.querySelector('.row')
            let cartaArticolo = <HTMLElement>document.createElement('div')
            cartaArticolo.classList.add('col-4')
            cartaArticolo.classList.add('col-12')
            cartaArticolo.classList.add('col-md-6')

            cartaArticolo.innerHTML += `
            <div class="card mt-2 d-flex justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
            <img src="${el.img}" class="card-img-top mt-1">
            <div class="card-body justify-content-center p-0">
                <h5 class="card-title text-center">${el.capo} ${el.collezione}</h5>
                <p class="card-text">Risparmia <span class="risparmio">` + abbigliamentoSpecifico.getSaldoCapo() + `€ </span>grazie allo sconto del <span class="saldo">${el.saldo}%</span>. Per un totale di <span class="fs-2">` + abbigliamentoSpecifico.getAcquistoCapo() + `€</span></p>
                
                
            </div>
            <a class="btn btn-primary text-center">Acquista!</a>
            <p>Disponibilità in <span class="text-success">${el.disponibile}</span></p><p> Quantità disponibili <span class="text-danger">${el.quantita}</span></p>
            </div>`
            blocco.append(cartaArticolo)
            
       
           
        })
         /*
            Utilizzo elementi dom OK , parte css e html molto veloce e immediata
            Devo rivedere come utilizzare al meglio la nomenclatura per i vari session storage perchè funzionavano ma riportavano errori sballati, troppa roba per 4 giorni, ma bene così si procede bene.
            Continuo a ribadire che apportare esempi pratici e teoria scritta a mano da noi in ogni esercizio, sia una strada vincente
            */ 

    })
