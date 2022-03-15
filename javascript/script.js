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
    let cellsToCreate = document.createElement("div");
    cellsToCreate.classList.add("cell");
    return cellsToCreate;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Vado a selezionare e salvare in una costante il mio elemento html della griglia
const grid = document.querySelector("#grid");
// definisco il numero di celle per riga
const rows = 10;
// definisco il numero di celle per colonna
const columns = 10;
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