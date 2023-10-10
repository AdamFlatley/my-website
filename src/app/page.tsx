"use client";
import React, { useEffect } from 'react'
import { TechStrip } from '@/components/tech-strip/tech-strip'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'


const DynamicComponent = dynamic(() => import("../components/header/header"), {
  ssr: false,
});

export default function Home() {

  return (
    <main className="flex-col">
      <DynamicComponent />
      <b className='min-h-screen'>empty Body</b>
      <TechStrip/>
      <Footer />
    </main>
  )
}
