"use strict";
let negozio = fetch("./json/Abbigliamento.json").then((response) => response.json());
console.log(negozio);
class CapiAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivainclusa, prezzoivaesclusa, disponiblile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.disponiblile = disponiblile;
        this.saldo = saldo;
    }
    getSaldoCapo(numPrezzo, numSaldo) {
        let percentualeSaldo = numSaldo / 100;
        return numPrezzo * percentualeSaldo;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    function createCards() {
        let box = document.querySelector(".box-card");
        let cardDisplay = document.createElement("ul");
        let capo = negozio.then((capo) => {
            let card = new CapiAbbigliamento(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivainclusa, capo.prezzoivaesclusa, capo.disponiblile, capo.saldo);
            return card;
        });
    }
    function displayCards(obj) {
        let box = document.querySelector(".box-card");
        let cardDisplay = document.createElement("ul");
        // arr.forEach((i) => (cardDisplay.innerHTML = `<li>${i}</li>`));
        box === null || box === void 0 ? void 0 : box.appendChild(cardDisplay);
    }
});
