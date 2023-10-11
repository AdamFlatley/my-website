import React from 'react'
import { TextContainer } from '../sub-components/text-container/text-container'
import { TechStrip } from '@/components/tech-strip/tech-strip'
import { allTextContents } from './text.data'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

 const MainBody = () => {
    return (
    <div className="flex flex-col justify-center max-w-screen-xl m-auto">
        <TextContainer text={allTextContents.IntroParagraph}/>
        <TextContainer text={allTextContents.WhatToDo}/>
        <TextContainer text={loremIpsum}/>
        <TextContainer text={loremIpsum}/>

        <TechStrip />
    </div>

)
}
export default MainBody