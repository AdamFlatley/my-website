import React from 'react'

export type HomePageBoxProps = {
    header: string,
    description: string,
}

export const HomePageBox = (props: HomePageBoxProps) => {


    return (
    <div className='flex flex-col items-center rounded-lg'>
        <h2 className= 'font-Consolas text-xl font-semibold'>{props.header}</h2>
        <b className='text-lg'>{props.description}</b>
    </div>
)
}