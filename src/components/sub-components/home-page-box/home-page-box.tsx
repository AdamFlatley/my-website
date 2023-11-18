import React from 'react'

export type HomePageBoxProps = {
    header: string,
    description: string,
    color: string,
    imageSrc: string,
    extraImageStyling: string
}

export const HomePageBox = (props: HomePageBoxProps) => {
    let mainClassTailwind =  'flex flex-col group items-center rounded-sm shadow-2xl h-96 w-96 hover:animate-grow hover:z-50 border-8 relative ' + props.color
    let imageTailwind = 'absolute self-center justify-self-center m-20 group-hover:invisible ' + props.extraImageStyling

    return (
    <div className={mainClassTailwind} >
        <h2 className='font-Consolas text-2xl font-semibold m-4'>{props.header}</h2>
        <img
            className={imageTailwind}
            src={props.imageSrc} />
        <b className='absolute self-center justify-self-center text-lg font-normal m-20 invisible group-hover:visible'>{props.description}</b>
    </div>
)
}