// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function palindrome(parola) {
  for(var i = 0; i < parola.length / 2; i++) {
    if (parola.charAt(i) != parola.charAt(parola.length - (i + 1))) {
      return alert(parola + " non e' palindroma");
    } return alert(parola + " e' palindroma");
  }
}

var parolaUtente = prompt("inserisci una parola e scopri se e' palindroma");

parolaUtente = parolaUtente + (palindrome(parolaUtente));