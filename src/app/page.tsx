"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import AboutBody from '@/components/about-body.tsx/about-body';
import Header from '@/components/header/header';
import { Modal, Button, Form } from "react-bootstrap";
import SuitImage from '../../images/399858265_6925222990850265_5672313231962012675_n.jpg'

export default function HomePage() {
  const [showModal, setShowModal] = useState(true)

  return (
    <main className='flex flex-col max-w-screen-2xl mx-auto'>
      <div className='flex flex-row '>
          <img className='max-w-sm rounded-full shadow-lg m-3 justify-self-end'
                    alt='Avatar' src={SuitImage.src} />
          <h1 className='max-w-screen-xl m-auto text-lg mt-2 align-middle justify-self-center'>Meet Adam - Fullstack developer who focuses on teaching, readability and clarity.</h1>
          <img className='max-w-sm rounded-full shadow-lg m-3 justify-self-end'
                    alt='Avatar' src={SuitImage.src} />
      </div>
    </main>
  )
}
