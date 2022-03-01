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