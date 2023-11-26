"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/about-body.tsx/about-body';

type Square = {
  // aim here will be for key to be row + col, e.g '11' for index 1 for both
  
  key: string,
  row: string,
  col: string,
  content: string
}

type Row = {
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

const initEmptyBoard2 = (): Row[] => {
  let sudokuBoard: Row[] = []
  for (let i = 0; i < 9; i++) {
    //could be an issue with overwriting reference
    let row: string[] = []
    for (let j = 0; j < 9; j++) {
      row.push('')
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

const fatherForgiveMeForMyTransgressions = (key: string) => {
  //named so because its takes a string '08', turns it into a number and finds the row column using / 10 .floor and % remainder 
  const keyAsNumber = parseInt(key)
  const row = Math.floor(keyAsNumber / 10)
  const col = keyAsNumber % 10
  return {row, col}
}

const changeSquare = (row: number, col: number) => {

}

export default function LinksPage() {

  // const [sudokuBoard, setSudokuBoard] = useState(initEmptyBoard())
  // const [sudokuBoard2, setSudokuBoard2] = useState(initEmptyBoard())
  const [sudokuSquare, setSudokuSquare] = useState('')

  const handleEvent = (event: any) => {
    setSudokuSquare(event.target.value)
  }

  // const handleSquareChange = (event: any) => {
  //   // console.log(event)
  //   const target = event.target
  //   const key = target.key
  //   const rowAndCol = fatherForgiveMeForMyTransgressions(key)
  //   console.log(key)
  //   sudokuBoard[rowAndCol.row].row[rowAndCol.col] = {
  //     key: key,
  //     row: '' + rowAndCol.row,
  //     col: '' + rowAndCol.col,
  //     content: '' + event.target.value,
  //   }
  //   setSudokuBoard(sudokuBoard)
  // }



  return (
    <main className='flex flex-col max-w-screen-xl mx-auto divide-y'>
        <h1 className='text-4xl mb-4'>Sudoku Solver</h1> 
        <h2 className='text-2xl'>Enter your Sudoku Puzzle and this program will provide a solution - Given there is one! </h2>
        {/* <div className='mx-auto max-h-xl'>
            {sudokuBoard.map((row) => {
              return (<div key={row.key} className='flex flex-row max-w-xl'>
                {row.row.map((square) => {
                  return <input key={square.key} type="text" className="block w-5 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={e => handleEvent(e)} value={sudokuSquare}/> })
                  
                }
                </div>)
            })}
        </div> */}
        <input type="text" className="block w-5 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={e => handleEvent(e)} value={sudokuSquare}/>
        <button>Solve</button>
        <button>Reset</button>
    </main>
  )
}
// {BlogTicketData.data.map((entry) => {return <BlogTicket {...entry} key={entry.key}/>})}

//error with hydration of system!