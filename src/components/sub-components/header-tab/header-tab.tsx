'use client'
import React from 'react'
import { HeaderTypeProps } from './header-tab.types';
import Link from 'next/link'

const HeaderTab = (props: HeaderTypeProps) => {
  return (
      <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white m-4 hover:animate-grow" href={`${props.LinkDestination}`}>{props.TabName}</Link>
  )
}

export default HeaderTab;


