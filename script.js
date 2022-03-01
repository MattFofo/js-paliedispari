/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/



//variabili
const userWord = document.querySelector("#input").value;
const btnStart = document.querySelector("#btn-start");
const output = document.querySelector("#output");


//funzione che scompone la stringa 'userInput'(parametro funzione) in un arrey di lettere, poi inverte l'ordine delle lettere e le riunisce in una nuova stringa ottenendo la parola al contrario.
//infine controllo se la stringa così ottenuta è uguale alla stringa 'userInput', ritornando true o false.
function isPalindrome(userInput) {
    const arrUserWordLetters = userInput.split('');
    const arrUserWordLettersReverse = arrUserWordLetters.reverse();
    const userWordReversed = arrUserWordLettersReverse.join('');

    if (userInput == userWordReversed) {
        return true;

    }
}



btnStart.addEventListener('click', function() {
    const userWord = document.querySelector("#input").value;


    //richiamo la funzione
    if (isPalindrome(userWord)) {
        output.innerHTML = 'Hai trovato una parola palindroma!';

    }else {
        output.innerHTML = 'niente, non è un palindromo..'
    }

})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



const userInput = document.querySelector("#input2").value;
const userNum = document.querySelector("#input2-num").value;
const output2 = document.querySelector("#output2");
const btnStart2 = document.querySelector("#btn-start2");
const elePcNum = document.querySelector("#pc-num");
const eleSumNums = document.querySelector("#sum-nums");



//funzione per generare un numero casuale compreso tra 'min, max'
function rngBetween(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


//funzione per stabilire se un numero è pari o dispari
function isEven(num) {

    if (num % 2 == 0) {
        return true;

    }else {
        return false;
    }
}




const pcNum = rngBetween(1, 5);
let sum = parseInt(userNum) + parseInt(pcNum);


btnStart2.addEventListener('click', function() {

    elePcNum.innerHTML = 'numero pc: ' + pcNum;
    eleSumNums.innerHTML = 'somma numeri: ' + sum;

    
    if (isEven(sum) && userInput == 'pari') {
        output2.innerHTML = 'hai vinto';

    }else if (!isEven(sum) && userInput == 'dispari') {
        output2.innerHTML = 'hai vinto';

    }else {
        output2.innerHTML = 'hai perso con stile';
    }

})