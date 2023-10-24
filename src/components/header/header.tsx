
import React from 'react'
import Headshot from '../../../public/Headshot.png'
import HeaderTab from '../sub-components/header-tab/header-tab';

const Header = () => {
    return (
        <nav className="bg-teal-500 p-6">
            <div className="flex align-center justify-between max-w-screen-xl m-auto">
                <div className="flex items-center flex-shrink-0 text-white mx-10">
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
                        <HeaderTab LinkDestination={"/"} TabName={"Home"} />
                        <HeaderTab LinkDestination={"/blog"} TabName={"Blog"} />
                        <HeaderTab LinkDestination={"/about"} TabName={"About"} />
                        <HeaderTab LinkDestination={"/links"} TabName={"Links"} />
                        <HeaderTab LinkDestination={"/reading-list"} TabName={"Reading List"} />
                    </div>
                </div>
            </div>
        </nav>
)
}

export default Header;

