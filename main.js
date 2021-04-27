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

/* var numeri = 0;
var numeroUtente; */

//Il software deve chiedere per 10 volte all’utente di inserire un numero.

/* for (var i = 1; i < 11; i++) {
    numeroUtente = Number(prompt ('inserisci un numero'));     
    numeri += numeroUtente;
} */

//Il programma stampa la somma di tutti i numeri inseriti. (modificato)

//console.log(numeri);


//jsnack 4
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. (modificato) 
//nomi in lista

/* var nomiLista = ['Luca', 'Francesco', 'giacomo'];
var nomeUtente = prompt('inserisci il tuo nome');
var messaggio = false;

for (var i = 0; i < nomiLista.length; i++) {
    if (nomeUtente === nomiLista[i]) {
        messaggio = true;
    }
}
if (messaggio) {
    console.log('benvenuto alla festa, puoi partecipare');
} else {
    console.log('non puoi partecipare alla festa')
} */


//jsnack 5
var numeriDispari = [];
var numero;
//chiedi 6 volte all'utente un numero se è dispari inseriscilo nell'arrray
for (var i = 0; i < 6; i++) {
    numero = Number(prompt('inserisci un numero'));
    if (numero % 2 != 0) {
        numeriDispari.push(numero); //inserito nell'array
    }
    console.log(numeriDispari); //mostra elenco
}
