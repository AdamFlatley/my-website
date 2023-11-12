"use client";
import React, { useEffect } from 'react'
import { BlogTicket } from '@/app/blog/components/blog-ticket';
import BlogTicketData from './data/blog-page-data';

export default function BlogPage() {

  return (
    <main className='grid grid-cols-3 gap-4 mx-auto max-w-screen-xl mt-4'>
      {BlogTicketData.data.map((entry) => {return <BlogTicket {...entry} key={entry.key}/>})}
    </main>
  )
}
