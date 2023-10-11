import React from 'react'

type TextContainerProps = {
    text: string
    removeBottomBorder?: Boolean
}

export const TextContainer = (text: TextContainerProps) => {
    let marginSize = 'm-10'
    if (text.removeBottomBorder) {
        marginSize = 'mx-10 mt-10'
    }
    return (
    <div className={marginSize}>
        <b className= 'font-Consolas text-xl font-semibold'>{text.text}</b>
    </div>

)
}