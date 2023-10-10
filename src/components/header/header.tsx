
import React from 'react'
import Headshot from '../../../images/Headshot.png'
import HeaderTab from '../sub-components/header-tab/header-tab';

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img
                src={Headshot.src}
                className="w-16 rounded-full shadow-lg m-3"
                alt="Avatar" />
                <div className='flex-col'>
                    <span className="font-semibold text-xl tracking-tight ml-2 mr-2 mb-1">Adam Flatley</span>
                    <p className="text-white dark:text-neutral-400 ml-2 mr-2 mt-1">Full Stack Developer</p>
                </div>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-2">
                <div className="text-med lg:flex-grow">
                    <HeaderTab TabName={"Blog"} />
                    <HeaderTab TabName={"About"} />
                    <HeaderTab TabName={"Links"} />
                </div>
            </div>
        </nav>
)
}

export default Header;

