'use client'
import React from 'react'
import { HeaderTypeProps } from './header-tab.types';

const HeaderTab = (props: HeaderTypeProps) => {
  return (
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-grow">
          {props.TabName}
        </a>
  )
}

export default HeaderTab;