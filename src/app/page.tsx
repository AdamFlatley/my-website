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
import HonestyImage from '../../images/person-insurance-icon.svg'
import CollaborationImage from '../../images/business-team-icon.svg'
import LearningImage from '../../images/e-learning-icon.svg'



export default function HomePage() {
  const [showModal, setShowModal] = useState(true)

  return (
    <main className='flex flex-col max-w-screen-xl mx-auto divide-y'>
      <div className='flex flex-row max-w-screen-2xl'>
          <div  className='flex flex-col  mx-auto mb-auto mt-32 place-content-evenly'>
            <h1 className='text-4xl mb-4'>Meet Adam</h1>
            <h2 className='text-2xl'> Fullstack developer with a focus on teaching, readability and clarity.</h2>
          </div>
          
          <img className='max-w-sm rounded-full shadow-2xl m-3 justify-self-end hover:animate-wiggle'
                    alt='Avatar' src={SuitImage.src} />
      </div>
      <div className='flex flex-col mt-6 text-4xl font-semibold'>
        <h2 className='divide-y justify-self-center align-center my-6 mx-auto'>My Values</h2>
        <div className='flex flex-row space-between mx-auto max-w-screen-xl'>
          <div className='my-0 -mx-5'>
            <HomePageBox header={'Collaboration'} imageSrc={CollaborationImage.src} description={'I enjoy teaching what I know to others. I\'ll try to do this by mentoring or even by my blog posts (check them out!)'} color='bg-tertiary-color' extraImageStyling='mt-32'/>
          </div>
          <div className='my-10 -mx-5'>
            <HomePageBox header={'Honesty'} imageSrc={HonestyImage.src} description={'I consider myself an honest person - and I feel it is a quality that has placed me in a fortuitous position throughout my career. I appreciate those around me being honest too, it really helps everyone get the best out of each other.'} color='bg-secondary-color'  extraImageStyling=''/>
          </div>
          <div className='my-20 -mx-5'>
            <HomePageBox header={'Learning'}  imageSrc={LearningImage.src} description={'If there\'s anything I feel is true about software development, it\'s that you\'re always learning. If this wasn\'t something I deemed important and found immense enjoyment in, I\'d be in the wrong line of work.'} color='bg-fourth-color'  extraImageStyling='mt-24'/>
          </div>
        </div>
      </div>
    </main>
  )
}