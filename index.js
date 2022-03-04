const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20


//create block class
class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis, yAxis + blockWidth]
    }
}


//make an array of blocks
const blocks = [
    new Block(10,270)
]

console.log(blocks[0])

//draw blocks
function addBlock(){
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
        
    }
}

addBlock()
