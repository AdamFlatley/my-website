import React from "react"

export type BlogTicketProps = {
    key: string,
    topic: string,
    title: string,
    href: string,
    description: string,
    image: string,
}

export const BlogTicket = (props: BlogTicketProps) => {

    return ( <a href={props.href} className='hover:animate-smallgrow rounded-xl shadow-md overflow-hidden bg-white min-w-'>
            <div className="md:flex">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={props.image} alt="Modern building architecture" />
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.topic}</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black ">{props.title}</div>
                <p className="mt-2 text-slate-500">{props.description}</p>
            </div>
            </div>
        </a>
     )
}


