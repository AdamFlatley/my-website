"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import AboutBody from '@/components/about-body.tsx/about-body';
import Header from '@/components/header/header';
import { Modal, Button, Form } from "react-bootstrap";
import SuitImage from '../../images/399858265_6925222990850265_5672313231962012675_n.jpg'
import { HomePageBox } from '@/components/sub-components/home-page-box/home-page-box';

export default function HomePage() {
  const [showModal, setShowModal] = useState(true)

  return (
    <main className='flex flex-col max-w-screen-xl mx-auto'>
      <div className='flex flex-row max-w-screen-2xl'>
          <div  className='flex flex-col  mx-auto mb-auto mt-32 place-content-evenly'>
            <h1 className='text-4xl mb-4'>Meet Adam</h1>
            <h2 className='text-2xl'> Fullstack developer with a focus on teaching, readability and clarity.</h2>
          </div>
          
          <img className='max-w-sm rounded-full shadow-2xl m-3 justify-self-end hover:animate-wiggle'
                    alt='Avatar' src={SuitImage.src} />
      </div>
      <div className='flex flex-row space-between mx-auto max-w-screen-xl'>
        <div className='my-0 -mx-5'>
        <HomePageBox header={'mebox'} description={'medescription'} color='bg-tertiary-color'/>
        </div>
        <div className='my-10 -mx-5'>
        <HomePageBox header={'mebox'} description={'medescription'} color='bg-secondary-color'/>
        </div>
        <div className='my-20 -mx-5'>
        <HomePageBox header={'mebox'} description={'medescription'} color='bg-fourth-color'/>
        </div>
      </div>
    </main>
  )
}
