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

const userInput = prompt('scrivi pari o dispari');
const userNum = parseInt(prompt('inserisci un numero da 1 a 5'));
const pcNum = rngBetween(1, 5);
let sum = userNum + pcNum;

console.log(pcNum, 'somma:', sum)


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


if (isEven(sum) && userInput == 'pari') {
    console.log('hai vinto');

}else if (!isEven(sum) && userInput == 'dispari') {
    console.log('hai vinto');
    
}else {
    console.log('hai diversamente vinto');
}


