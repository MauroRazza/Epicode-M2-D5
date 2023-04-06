/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function area(l1, l2) {
//     return l1 * l2;
// }

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(n1, n2){
//     let pippo = n1 + n2;
//     if (n1 === n2){
//         pippo = pippo * 3;
//     }
//     console.log(pippo);
//     return pippo;
// }

// crazySum(5, 5);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazyDiff(n1) {
//     let pippo = Math.abs(n1 - 19);
//     if (pippo > 19){
//         pippo = pippo * 3;
//     }
//     console.log(pippo);
//     return pippo;
// }

// crazyDiff(60);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function boundary(n1) {
//     let pippo = false;
//     if ((n1 >= 20 && n1 <= 100) || n1 === 400){ 
//         pippo = true;
//     }  
//     console.log(pippo);
//     return pippo;
// }

// boundary(30);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function codify(string) {
//     if (string.startsWith("code")) {
//         return string;
//     } else {
//         return "code" + string;
//     }
// }
// console.log(codify("code"));

/* ESERCIZIO 6
//  Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
//  La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
//  SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function check3and7(num) {
//     if (num % 3 === 0 || num % 7 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function reverseString(string) {
//     return string.split('').reverse().join('');
// }

// console.log(reverseString("ciao"));

/* ESERCIZIO 8
//  Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function upperFirst(string) {
//     return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(upperFirst("ciao sono mauro"))

/* ESERCIZIO 9
//  Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function cutString(string) {
//     return string.slice(1, -1);
// }

// console.log(cutString("buonasera"))

/* ESERCIZIO 10
//  Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.

/* SCRIVI QUI LA TUA RISPOSTA */

// function giveMeRandom(n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(Math.floor(Math.random() * 11));
//     }
//     return result;
// }

// console.log(giveMeRandom(8))
