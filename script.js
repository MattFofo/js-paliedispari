/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/



const userWord = prompt('inserisci parola');
console.log(userWord);


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

//richiamo la funzione 

if (isPalindrome(userWord)) {
    alert('è palindroma');
    
}else {
    alert('non è palindroma');
}
