//jsnack 2

// utente inserisce due parole

/* var parola1 = prompt('inserisci una parola');
var parola2 = prompt("inserisci un'altra parola"); */

//stampa la parola pù corta prima e poi quella più lunga

/* if (parola1.length < parola2.length) {
    console.log(parola1);
    console.log(parola2);
} else if (parola2.length < parola1.length){
    console.log(parola2);
    console.log(parola1);
} else {
    console.log('le parole sono lunghe uguali')
} */


//jsnack 3
var numeri = [];
var richiestaUtente;

//Il software deve chiedere per 10 volte all’utente di inserire un numero.
for (var i = 1; i < 11; i++) {
    richiestaUtente = Number(prompt ('inserisci un numero'));     
    numeri.push(richiestaUtente);
}
console.log(numeri);
//Il programma stampa la somma di tutti i numeri inseriti. (modificato)
console.log(numeri.sum());