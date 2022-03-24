// Descrizione:

// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Consigli del giorno:

// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


let contenitore = document.getElementById("stamp");
var userNum = [];
var points = [];
var numCpu = [];
var punteggio = 0;
contenitore.innerHTML += `Memorizza questi numeri in 30 sec:<div>${(randomGeneratorInt())}</div>`
setTimeout(numberHide, 2900)
setTimeout(getUserNum, 3000)


//funzione per generare 5 numeri random
function randomGeneratorInt (){
  for(i = 0; i < 5; i++){
    let randomNum = Math.floor(Math.random() * 100)
    numCpu.push(randomNum)
  }
  return numCpu;
}
//funzione per ricevere 5 numeri dall'utente
function getUserNum () {
  for (i = 0; i < 5; i++){
    let numInput = parseInt(prompt(`inserisci il ${i +1}° numero`))
    userNum.push(numInput)
  }
  arrayCompare()    
  return userNum;
}
//funzione per determinare l'uguaglianza dei 2 array
function arrayCompare () {
  for ( y = 0; y < 5; y++ ){
    if (numCpu.includes(userNum[y])){
      points.push(userNum[y])
      punteggio++
    }
  }
  result()
  return points;
}

function numberHide (){
  contenitore.classList.add("dNone")
}

function result (){
  contenitore.classList.remove("dNone")
  contenitore.innerHTML = `numeri indovinati:"${points}," i numeri da memorizzare erano : ${numCpu}, Punteggio ${punteggio}`
}