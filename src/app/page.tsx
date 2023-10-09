"use client";
import React, { useEffect } from 'react'
import { TechStrip } from '@/components/tech-strip/tech-strip'
import Image from 'next/image'
import dynamic from "next/dynamic";


const DynamicComponent = dynamic(() => import("../components/header/header"), {
  ssr: false,
});

export default function Home() {

  return (
    <main>
      <DynamicComponent />
      <TechStrip/>
    </main>
  )
}
