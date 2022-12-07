    //Creare una classe per gestire il contenuto paginato in un sito web.
    //La paginazione viene utilizzata per dividere lunghi elenchi di contenuti in una serie di pagine.La classe di paginazione accetterà 2 parametri:
    //items = []
    //pageSize = 10;
    
    class Pagination { // dichiaro la classe Pagination
        constructor (items = [], pageSize = 10) { //dichiaro il mio costruttore a cui do i valori items, che è un array vuoto , e pageSize al quale darò un numero come valore a seconda di quanto grande voglio la mia sezione della pagina
            this.items = items  //riporto i vari this dei valori all'interno della pagina
            this.pageSize = Math.floor(pageSize) //qua dico voglio il numero arrotondato che si avvicina di più a pageSize
            this.totalPages = Math.ceil(items.length / this.pageSize) || 1 //dichiaro che totalPages equivale al numero arrotondato per difetto dato dalla lunghezza dell array items che ho dichiarto diviso il this.pageSize oppure 1
            this.currentPage = 1 //dichiaro un valore di currentPage = 1
        }
        //applico i metodi che mi serviranno poi da far richiamare agli eventListener
        prevPage () { //col metodo prevPage dico che currentPage deve essere uguale al valore di current
            this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
            return this
        }
        nextPage () {
            this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
            return this
        }
        firstPage () {
            this.currentPage = 1
            return this
        }
        lastPage () {
            this.currentPage = this.totalPages
            return this
        }
        goToPage (page) {
            if (Math.sign(page) === -1) {
                this.currentPage = 1
                return this
            } else {
                this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
                return this
            }
        }
        getVisibleItems () {
            const start = this.currentPage * this.pageSize - this.pageSize;
            const end = this.currentPage * this.pageSize;
            //return this.items.slice(start, end);
            const lista = this.items.slice(start, end);
            const wrapper = document.querySelector('#wrapper');
            let strHtml = '';
            lista.forEach((item)=>{//ciclo di lista che parte dall'inizio di start e finisce con l'inizio di end
                strHtml += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td><td>${item.classe}</td></tr>`;
            });
            wrapper.innerHTML = strHtml;
        }
    }
    const users = [ //dichiaro una costante di nome users che è un array con 8 oggetti al suo interno
        {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
        {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
        {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
        {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
        {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
        {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
        {id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A'},
        {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
    ];
    p = new Pagination(users, 2);
    p.getVisibleItems();
    const primo = document.querySelector('#primo');
    primo.addEventListener('click', function(){
        p.firstPage();
        p.getVisibleItems();
    });
    const ultimo = document.querySelector('#ultimo');
    ultimo.addEventListener('click', function(){
        p.lastPage();
        p.getVisibleItems();
    });
    const precedente = document.querySelector('#precedente');
    precedente.addEventListener('click', function(){
        p.prevPage();
        p.getVisibleItems();
    });
    const successivo = document.querySelector('#successivo');
    successivo.addEventListener('click', function(){
        p.nextPage();
        p.getVisibleItems();
    });

