'use client'
import React from 'react'
import { HeaderTypeProps } from './header-tab.types';

const HeaderTab = (props: HeaderTypeProps) => {
  return (
    <div className="hover:animate-wiggle">
      <h2>
            {props.TabName}
      </h2>
    </div>
  )
}

export default HeaderTab;