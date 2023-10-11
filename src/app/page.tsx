"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/main-body.tsx/main-body';


const Header = dynamic(() => import("../components/header/header"), {
  ssr: false,
});

export default function Home() {

  return (
    <main className='flex flex-col'>
      <Header />
      <MainBody />
      <Footer />
    </main>
  )
}
