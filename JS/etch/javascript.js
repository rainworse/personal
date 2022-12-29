let GRID_SIZE = 16;
let squares = [];
let changeSizeButton = document.getElementById('change-size-button');
let grid;
changeSizeButton.addEventListener('click', changeGridSize);

createGrid();

function createGrid()
{
    if (grid) {
        grid.parentElement.removeChild(grid);
    }
    grid = document.createElement('div');
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.width = '100%';
    grid.style.height = '100%';
    grid.style.justifySelf = 'center';
    for (let i = 0; i < GRID_SIZE; i++) {
        grid.appendChild(createRow(i));
    }
    document.querySelector('.content').appendChild(grid);
}

function createRow(rowNum)
{
    let row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flex = '1';
    for (let i = 0; i < GRID_SIZE; i++) {
        row.appendChild(createSquare(rowNum, i));
    }
    return row;
}

function createSquare(rowNum, colNum)
{
    let square = document.createElement('div');
    square.style.width = '30px';
    square.style.height = '100%';
    square.style.backgroundColor = 'rgb(200, 200, 200)';
    square.style.flex = '1';
    square.style.borderRadius = '25%';
    square.id = rowNum + '_' + colNum;
    square.addEventListener('mouseover', changeColor);
    return square;
}

function changeColor(event)
{
    event.srcElement.style.backgroundColor = 'rgb(90, 90, 90)';
}

function changeGridSize()
{
    let textBox = document.getElementById('size-text-box');
    let newGridSize = textBox.value;
    if (!isNaN(newGridSize)) {
        GRID_SIZE = Number.parseInt(newGridSize);
        textBox.style.color = 'black';
        createGrid();
    }
    else {
        textBox.style.color = 'red';
    }
}