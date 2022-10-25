"use strict";
class Conto {
    constructor(saldoAttuale, versamento, prelievo) {
        this.saldoAttuale = saldoAttuale;
        this.versamento = versamento;
        this.prelievo = prelievo;
    }
    getSaldoAttuale() {
        return this.saldoAttuale;
    }
    getVersamento() {
        return this.versamento;
    }
    getPrelievo() {
        return this.prelievo;
    }
}
let figlio = new Conto(500, 0, 0);
console.log(figlio);
let madre = new Conto(5000, 1200, 500);
console.log(madre);
