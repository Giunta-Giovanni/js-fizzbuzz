
// INPUT
// Scrivi un programma che stampi i numeri da 1 a 100,
// Utilizziamo il ciclo for iniziando a contare da 1 fino al massimo di 100
for (let i = 1; i <= 100; i++){

    // ELABORAZIONE
    // se abbiamo dei multipli sia di 3 che di 5 il programma deve modificare i da numero a stringa "fizzbuzz"
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ");  
    } // altrimenti se abbiamo dei multipli di 3 il programma deve modificare i da numero a stringa "fizz"
    else if (i % 3 === 0){
        console.log("Fizz");  
    }// altrimenti se abbiamo dei multipli di 5 il programma deve modificare i da numero a stringa "buzz"
    else if (i % 5 === 0){
        console.log("Buzz"); 
    } // altrimenti il valore di i è normalmente un numero
    else{
        console.log(i);   
    } 
}






