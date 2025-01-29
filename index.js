function game(){
    let grid =  chooseGridSize()
    let player =  choosePlayerType()
    grid.draw()
    let isFinished = false
    while(!isFinished){
         isFinished =   player.explore(grid)
    }
    return EndGameRoutine() 
}



game()