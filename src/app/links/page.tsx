"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/about-body.tsx/about-body';

export default function LinksPage() {

  return (
    <main className='flex flex-col max-w-screen-xl mx-auto divide-y'>
      This page will be dedicated as links to alternate programs that are to also be hosted on this website. Examples of this include
      <ul>
        <li>Interactive Sudoku solver</li>
        <li>Tic Tac Toe Game</li>
        <li>WPM calculator</li>
        <li>Clicking accuracy Game</li>

      </ul>
    </main>
  )
}
