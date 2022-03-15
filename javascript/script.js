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

const grid = document.querySelector("#grid");

const rows = 10;
const columns = 10;
const numberCells = rows * columns;


for (let i = 0; i < numberCells; i++) {

    let cells = document.createElement("div");

    cells.classList.add("cell");

    grid.appendChild(cells);

    const randomNumberRequest = randomNumber(1, 100);



    cells.innerText = randomNumberRequest;



}

function randomNumber(min, max) {
    range = max - min + 1;
    let random = Math.floor(Math.random() * range) + min;
    return random;
}