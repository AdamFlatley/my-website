import { Row } from "./page"

export const hasMinimumSquares = (board: Row[]) => {
    //mathematically, we need at least 17 squares filled in to be able to have a valid solution
    let counter = 0
    board.forEach((row) => {
        row.row.forEach((square) => {
            if(square.content !== "") {
                
                counter += 1
                if(counter >= 17) {
                    return true
                }
            }
        })
    })
    return false

  }