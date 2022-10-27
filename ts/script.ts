let negozio = fetch("./json/Abbigliamento.json").then((response) => response.json());
console.log(negozio);

class CapiAbbigliamento {
  private id: number;
  private codprod: number;
  private collezione: string;
  private capo: string;
  private modello: number;
  private quantita: number;
  private colore: string;
  private prezzoivaesclusa: number;
  private prezzoivainclusa: number;
  private disponiblile: string;
  private saldo: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivainclusa: number,
    prezzoivaesclusa: number,
    disponiblile: string,
    saldo: number
  ) {
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

  getSaldoCapo(numPrezzo: number, numSaldo: number) {
    let percentualeSaldo = numSaldo / 100;
    return numPrezzo * percentualeSaldo;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function createCards() {
    let box = document.querySelector(".box-card");
    let cardDisplay = document.createElement("ul");
    let capo = negozio.then((capo) => {
      let card = new CapiAbbigliamento(
        capo.id,
        capo.codprod,
        capo.collezione,
        capo.capo,
        capo.modello,
        capo.quantita,
        capo.colore,
        capo.prezzoivainclusa,
        capo.prezzoivaesclusa,
        capo.disponiblile,
        capo.saldo
      );
      return card;
    });
  }

  function displayCards(obj: object) {
    let box = document.querySelector(".box-card");

    let cardDisplay = document.createElement("ul");
    // arr.forEach((i) => (cardDisplay.innerHTML = `<li>${i}</li>`));
    box?.appendChild(cardDisplay);
  }
});
