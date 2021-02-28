// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo se l'utente ha vinto.

// utente sceglie numero da 1 a 5 e pari o dispari
var sceltaUtente = prompt("scegli pari o dispari scrivendo qui sotto:")
var numUtente = parseInt(prompt("scegli un numero da uno a 5"));
var numComp = numRandom();
alert("Hai scelto il numero " + numUtente);
alert("il Computer ha scelto il numero " + numComp);


function numRandom (x) {
 var x = Math.floor(Math.random() * 5) + 1;
 return x;
}

// sommiamo i due numeri 
var risultato = numUtente + numComp 
// console.log(risultato);
risultato = pariDispari(risultato);
console.log(risultato);

// var risultato e' pari o dispari 
function pariDispari(z) {
 if (z % 2 == 0) {
   return true;
 }
 return false;
}

// dichiara se l'utente ha vinto
if (sceltaUtente == "pari") {
  if (risultato == false) {
    alert("Hai perso");
  } else if (risultato == true) {
    alert("Hai vinto");
  }
} else if (sceltaUtente == "dispari") {
  if (risultato == true) {
    alert("hai perso");
  } else if (risultato == false) {
    alert("Hai vinto");
  }
}