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
        if(counter >= 17) {
            return true
        }
    })
    if(counter >= 17) {
        return true
    }
    return false
}

export const hasBadInput = (board: Row[]) => {

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j ++){
    let isInvalid = false
    board.forEach((row) => {
        row.row.forEach((square) => {
            if(square.content !== "") {
                if(isAnInvalidInput(board, square.content, Number(square.col), Number(square.row))){
                    isInvalid = true
                    return isInvalid
                }
            }
        })
    })
    return isInvalid
}
    }
}
export const solveSudoku = (board: Row[]) => {
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j ++){
        if (board[i].row[j].content === ''){
          for(let k = 1; k < 10; k++) { 
            if(isPossible(board, k, i, j)) {
                board[i].row[j].content = '' + k
                solveSudoku(board)
                board[i].row[j].content = ''
            }
        }
        return
      }
    }
    }
    return board
}

export const isPossible = (board: Row[], value: number, col: number, row: number) => {
    for(let i = 0; i < 9; i ++){
        if (board[row].row[i].content === '' + value) {
        return false
        }
    }
    for(let i = 0; i < 9; i ++){
        if (board[i].row[col].content === '' + value) {
        return false
        }
    }
    let x0 = (Math.floor(row/3))*3
    let y0 = (Math.floor(col/3))*3
    for(let i = 0; i < 3; i ++){
        for(let j = 0; j < 3; j++) { 
            if (board[y0+i].row[x0+j].content === '' + value) {
                return false
            }
        }
    }
    return true
}
    

const isAnInvalidInput = (board: Row[], value: string, col: number, row: number) => {
    let currentValue = ('' + value)
    for(let i = 0; i < 9; i ++){
        if (board[row].row[i].content === currentValue && i !== col) {
            console.log('same row')
            return true
        }
    }
    for(let i = 0; i < 9; i ++){
        if (board[i].row[col].content === currentValue && i !== row) {
            console.log('same col')
            return true
        }
    }
    let x0 = (Math.floor(col/3))*3
    let y0 = (Math.floor(row/3))*3
    for(let i = 0; i < 3; i ++){
        for(let j = 0; j < 3; j++) { 
            if (board[y0+i].row[x0+j].content === currentValue && (y0+i !== row && x0+j !== col)) {
                console.log(currentValue)
                console.log('same square')
                console.log('row:', y0+i, 'col:', x0+j)
                return true
            }
        }
    }
    return false
}