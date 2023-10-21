"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Footer from '@/components/footer/footer'
import MainBody from '@/components/main-body.tsx/main-body';
import  ReadingListData, { ReadingListIntroduction }  from './components/reading-list.data';
import ReadingListTable from './components/list';
import { TextContainer } from '@/components/sub-components/text-container/text-container';

export default function ReadingListPage() {

  return (
    <main className='flex flex-col max-w-screen-xl m-auto'>
      <TextContainer text={ReadingListIntroduction} />
      <ReadingListTable {...ReadingListData} />
    </main>
  )
}
