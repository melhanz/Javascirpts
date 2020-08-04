document.addEventListener('DOMContentLoaded',() => {
    const grid = document.querySelector(".grid")
    let width = 10;
    let squaures = []
    let bombAmount = 20
    // create Board

    function createBoard(){
        //
        const bombsArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('empty')
        const gameArray = emptyArray.concat(bombsArray)
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)


        for(let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            square.setAttribute('id',i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squaures.push(squaures)
            
        }
    }

    createBoard()
    
})