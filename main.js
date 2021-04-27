// utente inserisce due parole
var parola1 = prompt('inserisci una parola');
var parola2 = prompt("inserisci un'altra parola");

//stampa la parola pù corta prima e poi quella più lunga
if (parola1.length < parola2.length) {
    console.log(parola1);
    console.log(parola2);
} else if (parola2.length < parola1.length){
    console.log(parola2);
    console.log(parola1);
}