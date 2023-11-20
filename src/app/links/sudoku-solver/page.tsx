"use client";
import React, { useEffect } from 'react'
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
  content: Square[]
}

export default function LinksPage() {
  const initEmptyBoard = () => {
    const length = 9
    const height = 9
    let sudokuBoard = []
    let row = []
    for (let i = 0; i < 9; i++) {
      //could be an issue with overwriting reference
      let row: Square[] = []
      for (let j = 0; j < 9; j++) {
        row.push({
          key: '' + i + j,
          row: '' + i,
          col: '' + j,
          content: ''
        })
      }
      sudokuBoard.push(
        {
          key: i,
          row: row
        }
        )
    }
    return sudokuBoard
  }

  const board = initEmptyBoard()

  return (
    <main className='flex flex-col max-w-screen-xl mx-auto divide-y'>
        <h1 className='text-4xl mb-4'>Sudoku Solver</h1> 
        <h2 className='text-2xl'>Enter your Sudoku Puzzle and this program will provide a solution - Given there is one! </h2>
        <div className='mx-auto max-h-xl'>
            {board.map((row) => {
              return (<div className='flex flex-row max-w-xl'>
                {row.row.map((square) => {
                  return <input type="text" className="block w-5 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=' '/>})
                }
                </div>)
            })}
        </div>
        <button>Solve</button>
        <button>Reset</button>
    </main>
  )
}
// {BlogTicketData.data.map((entry) => {return <BlogTicket {...entry} key={entry.key}/>})}