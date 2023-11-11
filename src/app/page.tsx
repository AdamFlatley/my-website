"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import AboutBody from '@/components/about-body.tsx/about-body';
import Header from '@/components/header/header';
import { Modal, Button, Form } from "react-bootstrap";

export default function HomePage() {
  const [showModal, setShowModal] = useState(true) 

  return (
    <main className='flex flex-col'>
      <h1 className='max-w-screen-xl m-auto text-lg mt-2'>Meet Adam - Fullstack developer who focuses on teaching, readability and clarity.</h1>
      <AboutBody />
    </main>
  )
}
