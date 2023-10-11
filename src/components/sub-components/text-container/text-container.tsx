import React from 'react'

type TextContainerProps = {
    text: string
}

export const TextContainer = (text: TextContainerProps) => {
    return (
    <div className='m-10'>
        <b className= 'font-Consolas text-xl font-semibold'>{text.text}</b>
    </div>

)
}