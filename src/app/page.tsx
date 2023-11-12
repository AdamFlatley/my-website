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
      <div className='flex flex-row'>
          <div  className='flex flex-col max-w-screen-xl mx-auto mb-auto mt-32 align-self-center justify-self-center'>
            <h1 className='text-lg'>Meet Adam</h1>
            <h2 className='text-lg'> Fullstack developer with a focus on teaching, readability and clarity.</h2>
          </div>
          
          <img className='max-w-sm rounded-full shadow-2xl m-3 justify-self-end hover:animate-wiggle'
                    alt='Avatar' src={SuitImage.src} />
      </div>
      <div>beans</div>
    </main>
  )
}
