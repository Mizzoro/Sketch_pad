// create function to create divs with classes
// create grid and append divs to it

const grid = document.querySelector('.grid');
let gridSize = 8;

const createDiv = (size) => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;


    return div
}

const addDivs = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
    }
}

console.log(grid.clientWidth )
addDivs(gridSize);
