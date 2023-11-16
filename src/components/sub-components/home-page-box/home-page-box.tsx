import React from 'react'

export type HomePageBoxProps = {
    header: string,
    description: string,
    color: string,
    imageSrc:string
}

export const HomePageBox = (props: HomePageBoxProps) => {
    let mainClassTailwind =  ' flex flex-col items-center rounded-sm shadow-2xl h-96 w-96 hover:animate-grow hover:z-50 border-8 ' + props.color

    return (
    <div className={mainClassTailwind} >
        <h2 className='font-Consolas text-2xl font-semibold m-4'>{props.header}</h2>
        <img
            className=''
            src={props.imageSrc} />
        <b className=' text-lg font-normal m-8 invisible hover:visible'>{props.description}</b>
    </div>
)
}