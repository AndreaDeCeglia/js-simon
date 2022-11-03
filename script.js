
/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
  - creare un array vuoto
  prendere gli input dall'utente per impostare il gioco*/
  let output = [];

  let userNumbers = [];

  let numberQuantity = document.getElementById('number-quantity');
  console.log(numberQuantity);

  let timeQuantity = document.getElementById('time-quantity');
  console.log(timeQuantity);
  let time = timeQuantity * 1000;

  let outputSpot = document.getElementById('output-spot');

  let verifySpot = document.getElementById('verify-spot');

  /*- creare una funzione per generare num random*/
   /*- ciclo per generare X numeri casuali nell'array / bonus: controllare che siano univoci
  - pushiamo ogni num nell array vuoto*/
  function randomic(numberQuantity){

    for( let i=1; x<=numberQuantity; i++){
        let randomNumber = Math.round(Math.random() * 100) + 1;
        if (output.includes(randomNumber)){
            i--;
        }else{
            output.push(randomNumber);
              /*- stampiamo i pagina i numeri generati*/
            outputSpot.innerHTML = `${output}`
        }
    }
    console.log(output);
  }
  
  /*- nascondo i numeri visualizzati con il css dopo tot secondi*/

  setTimeout( function(){
    outputSpot.innerHTML = '';
    function(numberQuantity){
        for( x=1; x<=numberQuantity; x++){
            verifySpot = document.createElement('<input type="number" class="neon-button">')
        }
    }
  },time)

 /* - far comparire 5 prompt dopo tot secondi
  2 idee :
  - idea 1: salvare in un altro array i numeri scritti dall'utente nei prompt e controllare quali e quanti numeri coincidano con l'array dei num random
  - idea 2: controllare ogni numero che viene scritto dall'utente è incluso nell'array dei num random
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/


