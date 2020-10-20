// chiedere all'utente quanti chilometri deve percorrere
var km = parseInt(prompt("Quanti km devi percorrere?"));

console.log(km);

// chidere all'utente quanti anni // HACK:
var eta = parseInt(prompt("Quanti anni hai?"));

console.log(eta);

// calcolo costo bilietto sezna sconti
var costoBiglietto = 0.21 * km;

console.log(costoBiglietto);

// calcolo sconto biglietto e mostra il prezzo all'utente
if (eta < 18) {
  costoBiglietto = costoBiglietto / 100 * 80;

  console.log(costoBiglietto);

  document.getElementById('prezzo').innerHTML = costoBiglietto.toFixed(2) + " &#8364;";

} else if (eta > 65) {
  costoBiglietto = costoBiglietto / 100 * 60;

  console.log(costoBiglietto);

  document.getElementById('prezzo').innerHTML = costoBiglietto.toFixed(2) + " &#8364;";

} else {
  console.log(costoBiglietto);

  document.getElementById('prezzo').innerHTML = costoBiglietto.toFixed(2) + " &#8364;";
}
