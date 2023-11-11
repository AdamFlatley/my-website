"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/about-body.tsx/about-body';
import { BlogTicket } from '@/app/blog/components/blog-ticket';
import BlogTicketData from './data/blog-page-data';

export default function BlogPage() {

  return (
    <main className='grid grid-cols-4 gap-4 max-w-md mx-auto md:max-w-2xl'>
      {BlogTicketData.data.map((entry) => {return <BlogTicket {...entry} key={entry.key}/>})}
    </main>
  )
}
