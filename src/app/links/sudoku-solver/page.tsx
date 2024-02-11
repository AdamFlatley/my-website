"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/about-body.tsx/about-body';
import { hasBadInput, hasMinimumSquares } from './sudoku-solver.utils';

export type Square = {
  // aim here will be for key to be row + col, e.g '11' for index 1 for both
  
  key: string,
  row: string,
  col: string,
  content: string
}

export type Row = {
  // aim here will be for key to be row + col, e.g '11' for index 1 for both
  key: string,
  row: Square[]
}

const initEmptyBoard = (): Row[] => {
  let sudokuBoard: Row[] = []
  for (let i = 0; i < 9; i++) {
    //could be an issue with overwriting reference
    let row: Square[] = []
    for (let j = 0; j < 9; j++) {
      row.push({
        key: '' + i + j,
        row: '' + i,
        col: '' + j,
        content: '',
      })
    }
    sudokuBoard.push(
      {
        key: '' + i,
        row: row,
      }
      )
  }
  return sudokuBoard
}

// const initEmptyBoard2 = (): Row[] => {
//   let sudokuBoard: Row[] = []
//   for (let i = 0; i < 9; i++) {
//     //could be an issue with overwriting reference
//     let row: string[] = []
//     for (let j = 0; j < 9; j++) {
//       row.push('')
//     }
//     sudokuBoard.push(
//       {
//         key: '' + i,
//         row: row,
//       }
//       )
//   }
//   return sudokuBoard
// }

const fatherForgiveMeForIHaveSinned = (key: string) => {
  //named so because its takes a string '08', turns it into a number and finds the row column using / 10 .floor and % remainder 
  const keyAsNumber = parseInt(key)
  const row = Math.floor(keyAsNumber / 10)
  const col = keyAsNumber % 10
  return {row, col}
}

export default function LinksPage() {

  const [sudokuBoard, setSudokuBoard] = useState(initEmptyBoard())
  const [minimumSquaresError, setMinimumSquaresError] = useState(false)
  const [badInputError, setBadInputError] = useState(false)
  const [sudokuSquare, setSudokuSquare] = useState('')

  useEffect(()=>{
    setSudokuBoard(sudokuBoard)
},[sudokuBoard])

  const handleEvent = (event: any) => {
    setSudokuSquare(event.target.value)
  }

  const handleSolve = (event: any) => {
    //check if input is valid
    if(!hasMinimumSquares(sudokuBoard)){
      setMinimumSquaresError(true)
    }
    if(hasBadInput(sudokuBoard)){
      setBadInputError(true)
    }
    

    setSudokuBoard(sudokuBoard)
  } 

  const handleReset = (event: any) => {
    setSudokuBoard(initEmptyBoard())
  }



  const handleSquareChange = (event: any) => {
    // console.log(event)
    const newBoard = [...sudokuBoard]
    const target = event.target
    const key = target.name
    const rowAndCol = fatherForgiveMeForIHaveSinned(key)
    let newSquare
    if (event.target.value.length > 0) {
    newSquare = {
      key: '' + rowAndCol.row +  rowAndCol.col,
      row: '' + rowAndCol.row,
      col: '' + rowAndCol.col,
      content: '' + event.target.value[event.target.value.length-1],
    }
    if (Number.isNaN(parseInt(newSquare.content))) {
      return
    }
  } else {
    newSquare = {
      key: '' + rowAndCol.row +  rowAndCol.col,
      row: '' + rowAndCol.row,
      col: '' + rowAndCol.col,
      content: ''
  }}
    newBoard[rowAndCol.row].row[rowAndCol.col] = newSquare
    console.log(newBoard, 'newBoard')
    setSudokuBoard(newBoard)

  }

  return (
    <main className='flex flex-col max-w-screen-xl mx-auto divide-y'>
        <h1 className='text-4xl mb-4'>Sudoku Solver</h1> 
        <h2 className='text-2xl'>Enter your Sudoku Puzzle and this program will provide a solution - Given there is one! </h2>
        <div className='mx-auto max-h-xl'>
            {sudokuBoard.map((row) => {
              return (<div key={row.key} className='flex flex-row max-w-xl'>
                {row.row.map((square) => {
                  return <input key={square.key} type="text" name={square.key} id={square.key} className="block w-10 border-0 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={e => handleSquareChange(e)} value={square.content}/> })
                  
                }
                </div>)
            })}
        </div>
       {/* <input type="text" name="Contact/Feedbacks" id="Contact/Feedbacks" onChange={(e) => handleEvent(e)} value={sudokuSquare} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="If you're trying to start a conversation leave some contact information or contact me via LinkedIn instead!" /> */}
      {minimumSquaresError && <div className='text-2xl'>You need more squares, that isn't mathematically possible!</div>}
      {badInputError && <div className='text-2xl'>that's a bad input you goofball!</div>}
      <button onClick={handleSolve}>Solve</button>
      <button onClick={handleReset}>Reset</button>
    </main>
  )
}
// {BlogTicketData.data.map((entry) => {return <BlogTicket {...entry} key={entry.key}/>})}