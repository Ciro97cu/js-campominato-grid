/* Consegna
creare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi 
in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

BONUS:
L'utente indica un livello di difficoltà,
in base al livello scelto la griglia conterrà un range diverso:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 */

//FUNZIONI
function createCells() {
    // creao l'elemento div da andare in seguito ad inserire nel tag div con id grid
    let cellsToCreate = document.createElement("div");
    // aggiungo all'elemento div la classe "cell"
    cellsToCreate.classList.add("cell");
    /* in base alla scelta iniziale dell'utente andro ad inserire 
    classi aggiuntive che controllano le dimensioni delle celle */
    if (choice === "livello1") {
        cellsToCreate.classList.add("cell-level1");
    } else if (choice === "livello2") {
        cellsToCreate.classList.add("cell-level2");
    } else {
        cellsToCreate.classList.add("cell-level3");
    }
    return cellsToCreate;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Vado a selezionare e salvare in una costante il mio elemento html della griglia
const grid = document.querySelector("#grid");
// chiedo all'utente di scegliere tra uno dei tre livelli
let = choice = "";
// controllo che l'utente abbia inserito correttamente la stringa
do {
    choice = prompt("Scegli tra: Livello1, Livello2 e Livello3").trim().toLowerCase();
} while (choice !== "livello1" && (choice !== "livello2" && choice !== "livello3"))
// inizializzo le variabile rows che andra a prendere valore in base alla scelta dell'utente
let rows = 0;
// inizializzo le variabile columns che andra a prendere valore in base alla scelta dell'utente
let columns = 0;
// imposto la condizione if che darà valori specifici a rows e columns in base alla scelta dell'utente
if (choice === "livello1") {
    rows = 10;
    columns = 10;
} else if (choice === "livello2") {
    rows = 9;
    columns = 9;
} else {
    rows = 7;
    columns = 7;
}
// vado a eseguire una moltiplicazione per sapere il numero di celle da inserire nella griglia
const numberCells = rows * columns;
// creao un ciclo for che si ripeterà tante volte quante sono le celle 
for (let i = 0; i < numberCells; i++) {
    // richiamo la funzione che mi va a creare i div all'interno della griglia
    let cells = createCells();
    // vado a inserire i div all'interno della mia griglia
    grid.appendChild(cells);
    // inserisco numeri all'interno delle celle in maniera sequenziale
    cells.innerText = i + 1;
    // applico un EventListener al click che fa cambiare il colore alle celle
    cells.addEventListener("click",
        function () {
            cells.classList.toggle("bgc-sky");
        }
    )
}