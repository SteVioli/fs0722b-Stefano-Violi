//possibilità di leggere e settare all'interno di oggetti
//get e set
var Uomo = /** @class */ (function () {
    function Uomo(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Object.defineProperty(Uomo.prototype, "nomeCompleto", {
        get: function () {
            return this.nome + " " + this.cognome;
        },
        set: function (valore) {
            var parti = valore.toString().split(' ');
            this.nome = parti[0] || '';
            this.cognome = parti[1] || '';
        },
        enumerable: false,
        configurable: true
    });
    return Uomo;
}());
var stefanoVioli = new Uomo("Stefano", "Violi");
console.log(stefanoVioli.nomeCompleto);
stefanoVioli.nomeCompleto = 'Giuseppe Verdi';
console.log(stefanoVioli.nomeCompleto);
console.log(stefanoVioli.nome);
console.log(stefanoVioli.cognome);
//tsc oggetto3.ts --target ES5 quando rompe le palle con la versione gli dai target corretto
// oppure
//utilizzi il file tsconfig.json
