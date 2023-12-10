/* Getting the basic HTML elements to work with */
const grid = document.getElementById("grid")
const setGridsButton = document.getElementById('set_grids_button')
const setGridsInput = document.getElementById('grid_num')
const resetButton = document.getElementById('reset')
const rainbowModeButton = document.getElementById('rainbow_mode')
const normalModeButton = document.getElementById('normal_mode')

/* Adding a function that clears the grid */
resetButton.onclick = () => {grid.innerHTML = ''}

let grid_cells = []

/* When the user clicks on "Set Grids", the sketchpad will be created */
setGridsButton.onclick = () => {

    grid.innerHTML = ''

    for (let i = 0; i < Math.pow(parseInt(setGridsInput.value), 2); i++) {

        const grid_cell = document.createElement('div')
        grid_cell.className = 'grid_cell'
        grid.append(grid_cell)
        grid_cells.push(grid_cell)

        grid_cell.addEventListener('dragstart', (e) => {

            e.preventDefault()

        })

    }

    grid.style.gridTemplateColumns = `repeat(${parseInt(setGridsInput.value)}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${parseInt(setGridsInput.value)}, 1fr)`

    etch_a_sketch()

}

/* Coding two different color modes */
let flag = false

let color = "#B0B0B0"

function rainbowMode() {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    color = `rgb(${r}, ${g}, ${b})`

}

function normalMode() {

    color = '#B0B0B0'

}

let colorMode = 'normal'

rainbowModeButton.onclick = () => {colorMode = 'rainbow'}

normalModeButton.onclick = () => {colorMode = 'normal'}

/* Adding some events, so that when the mouse is down, one can start drawing in the grid */
function etch_a_sketch() {

    for (let j = 0; j < grid_cells.length; j++) {
    
        grid_cells[j].addEventListener('mousedown', () => {
            flag = true
        })
    
        grid_cells[j].addEventListener('mouseover', () => {
            if(flag == true && colorMode == 'normal') {
                normalMode()
                grid_cells[j].style.backgroundColor = color
            } else if (flag == true && colorMode == 'rainbow') {
                rainbowMode()
                grid_cells[j].style.backgroundColor = color
            }
        })
    
        grid_cells[j].addEventListener('mouseup', () => {
            flag = false
        })
        
    }

}
