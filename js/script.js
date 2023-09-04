// create function to create divs, include color change event listener
// create grid and append divs to it
// reset button
// change grid size

const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.clear');
const sizeInput = document.querySelector('input');
const applyBtn = document.querySelector('.apply')
const gridText = document.querySelector('.grid_size')
let currentGridSize = 8;


const createDiv = (size) => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'blue';
    } )

    return div
}

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
    }

}

const removeGridDivs = () => {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}

const newGrid = () => {
    removeGridDivs();
    createGrid(sizeInput.value);  
}

const resetGrid = () => {
    removeGridDivs();
    createGrid(currentGridSize);
}


applyBtn.addEventListener('click', () => {
    if (currentGridSize != sizeInput.value) {
        currentGridSize = sizeInput.value;
        newGrid();
        gridText.textContent = `${currentGridSize}x${currentGridSize}`
    }
});

resetBtn.addEventListener('click', () => {
    resetGrid();
});


createGrid(currentGridSize);

