
import React from 'react'
import Headshot from '../../../images/Headshot.png'
import HeaderTab from '../sub-components/header-tab/header-tab';



const Header = () => {
      
return (
    <div className="flex m-10 justify-around">
        <div className="text-center">
            <img
            src={Headshot.src}
            className="w-32 rounded-full shadow-lg"
            alt="Avatar" />
            <h5 className="mb-2 text-xl font-medium leading-tight">Adam Flatley</h5>
            <p className="text-neutral-500 dark:text-neutral-400">Full Stack Developer</p>
        </div>
        <HeaderTab TabName={'Home'} TabIcon={'NA'} />
        <HeaderTab TabName={'About'} TabIcon={'NA'} />
        <HeaderTab TabName={'Blog'} TabIcon={'NA'} />
    </div>
)
}

export default Header;