/*Getting the basic HTML elements to work with*/
const grid = document.getElementById("grid")
const setGridsButton = document.getElementById('set_grids_button')
const setGridsInput = document.getElementById('grid_num')
const setCellSize = document.getElementById('cell_size')

/*Adding click styles to the button*/
setGridsButton.onmousedown = () => {setGridsButton.style.backgroundColor = "#CFCFCF"}
setGridsButton.onmouseup = () => {setGridsButton.style.backgroundColor = "#EBEBEB"}

/*Styling the grid*/
grid.style.display = "grid"

/*Getting the cells after creating them*/
let grid_cells;

/*Inserting the grid cells*/
set_grids_button.addEventListener('click', () => {

    for (let i = 0; i < parseInt(setGridsInput.value); i++) {

        grid.insertAdjacentHTML("beforeend", "<div class='grid_cell'><div/>")
        grid.style.gridTemplateColumns = `repeat(${parseInt(setGridsInput.value)}, ${setCellSize.value + "px"} 1fr)`
        grid.style.gridTemplateRows = `repeat(${parseInt(setGridsInput.value)}, ${setCellSize.value + "px"} 1fr)`

    }

})

grid_cells = document.querySelectorAll(".grid_cell")

let flag = false

/*Adding some events, so that when the mouse is down, one can start drawing in the grid*/
for (let j = 0; j < grid_cells.length; j++) {

    grid_cells[j].style.backgroundColor = "#EBEBEB"

    grid_cells[j].addEventListener('mousedown', () => {
        flag = true
        grid_cells[j].style.backgroundColor = "#B0B0B0"
    })

    grid_cells[j].addEventListener('mouseover', () => {
        if(flag == true) {
            grid_cells[j].style.backgroundColor = "#B0B0B0"
        }
    })

    grid_cells[j].addEventListener('mouseup', () => {
        flag = false
    })
    
}