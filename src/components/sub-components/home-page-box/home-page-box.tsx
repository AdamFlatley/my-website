import React from 'react'

export type HomePageBoxProps = {
    header: string,
    description: string,
    color: string,
}

export const HomePageBox = (props: HomePageBoxProps) => {
    let mainClassTailwind =  ' flex flex-col items-center rounded-sm shadow-2xl h-96 w-96 hover:animate-grow hover:z-50 ' + props.color

    return (
    <div className={mainClassTailwind} >
        <h2 className='font-Consolas text-xl font-semibold'>{props.header}</h2>
        <b className='text-lg'>{props.description}</b>
    </div>
)
}