class MotherAccount {
    protected saldo:number = 0;
    versamento(importo: number) {
        this.saldo += importo;
        this.aggiungiInteresse();
    }
    prelievo(importo: number) {
        if(this.saldo >= importo) {
            this.saldo -= importo;
        } else {
            console.log("Non puoi prelevare!!!")
        }
    }
    stampaSaldo() {
        console.log(this.saldo);
    }
    aggiungiInteresse() {
        this.saldo += this.saldo*0,1;
    }

}
class SonAccount extends MotherAccount {
    versamento(importo: number) {
        this.saldo += importo;
    }
}
let motherAccount = new MotherAccount();
let sonAccount = new SonAccount();
motherAccount.stampaSaldo();
sonAccount.stampaSaldo();
motherAccount.versamento(5000);
sonAccount.versamento(1000);
motherAccount.stampaSaldo();
sonAccount.stampaSaldo();
motherAccount.prelievo(6000);
sonAccount.prelievo(3000);
motherAccount.prelievo(2000);
sonAccount.prelievo(500);
motherAccount.stampaSaldo();
sonAccount.stampaSaldo();
motherAccount.aggiungiInteresse();
motherAccount.stampaSaldo();






// class Conto {
//     private saldoAttuale: number; 
//     private versamento: number;
//     private prelievo: number; 

//     constructor (saldoAttuale: number, versamento: number, prelievo: number ) {
//         this.saldoAttuale = saldoAttuale;
//         this.versamento = versamento;
//         this.prelievo = prelievo;
//     }
    
//     public getSaldoAttuale(): number {
//         return this.saldoAttuale;
//     }
//     public getVersamento(): number {
//         return this.versamento;
//     }
//     public getPrelievo(): number {
//         return this.prelievo;
//     }
// }
// let figlio = new Conto(500, 0, 0)
// console.log(figlio);
// let madre = new Conto(5000, 1200, 500)
// console.log(madre);