# js-fizzbuzz
Esercizio di oggi: FizzBuzz

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”;

Dopo esserci concentrati sul far funzionare le cose e averle testate,
ragioniamo  sul possibile refactoring, quindi ottimizzazione possibile,
sia del codice come performance, ma anche, se non soprattutto come leggibilità e mantenibilità.



INPUT
Scrivi un programma che stampi i numeri da 1 a 100,
Utilizziamo il ciclo for iniziando a contare da 1 fino al massimo di 100
stampiamo i valori di i da 1 a 100  

ELABORAZIONE

<!--viene inserito prima fizzbuzz perche la sua condizione è più debole rispetto agli altri  -->
se abbiamo dei multipli sia di 3 che di 5 il programma deve modificare i da numero a stringa "fizzbuzz" 

altrimenti se abbiamo dei multipli di 3 il programma deve modificare i da numero a stringa "fizz"

altrimenti se abbiamo dei multipli di 5 il programma deve modificare i da numero a stringa "buzz"

altrimenti il valore di i è normalmente un numero

OUTPUT
Mostrate tutto tramite console log