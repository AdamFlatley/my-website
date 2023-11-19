"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/about-body.tsx/about-body';

export default function LinksPage() {
    const length = 9
    const height = 9
    let sudokuBoard = [...Array(9)].map(e => Array(9).map());

  return (
    <main className='flex flex-col max-w-screen-xl mx-auto divide-y'>
        <h1 className='text-4xl mb-4'>Sudoku Solver</h1> 
        <h2 className='text-2xl'>Enter your Sudoku Puzzle and this program will provide a solution - Given there is one! </h2>
        <div className='mx-auto'>
            {sudokuBoard.map((row) => {
              return (<div>
                {row.map(() => {
                  return <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='1'/>})
                }
                </div>)
            })}
        </div>

    </main>
  )
}
// {BlogTicketData.data.map((entry) => {return <BlogTicket {...entry} key={entry.key}/>})}