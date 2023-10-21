"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/main-body.tsx/main-body';
import { ReadingListData } from './components/reading-list.data';
import ReadingListTable from './components/list';

export default function ReadingListPage() {

  return (
    <main className='flex flex-col'>
      <ReadingListTable {...ReadingListData}/>
    </main>
  )
}
