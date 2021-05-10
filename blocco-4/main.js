// snack 1A

// creare un oggetto palla ch e abbia le seguenti proprietà
/* nome = palla
peso = 10 */
/* var Palla = {
    nome: 'palla',
    peso: 10
} */
// snak 1B

//attraverso un prompt dare la possibilita all'utente di modicifare il peso della palla
/* Palla.peso = parseInt(prompt('inserisci il nuovo peso della palla'));
console.log(Palla); */

// jssnack 2
// creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
var Triangolo = {
    base: 30,
    altezza: 20,
}
// calcola perimetro e area.
var cateto = Math.sqrt(Math.pow(Triangolo.base, 2) + Math.pow(Triangolo.altezza, 2));
console.log(cateto);
var area = (Triangolo.base * Triangolo.altezza) / 2;
console.log(area);
var perimetro = cateto + Triangolo.base + Triangolo.altezza;
console.log(perimetro);