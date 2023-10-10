
import React from 'react'
import Headshot from '../../../images/Headshot.png'
import HeaderTab from '../sub-components/header-tab/header-tab';



// const Header = () => {
      
// return (
//     <div className="flex m-10 justify-around">
//         <div className="text-center">
//             <img
//             src={Headshot.src}
//             className="w-32 rounded-full shadow-lg"
//             alt="Avatar" />
//             <h5 className="mb-2 text-xl font-medium leading-tight">Adam Flatley</h5>
//             <p className="text-neutral-500 dark:text-neutral-400">Full Stack Developer</p>
//         </div>
//         <HeaderTab TabName={'Home'} TabIcon={'NA'} />
//         <HeaderTab TabName={'About'} TabIcon={'NA'} />
//         <HeaderTab TabName={'Blog'} TabIcon={'NA'} />
//     </div>
// )
// }
const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img
                src={Headshot.src}
                className="w-16 rounded-full shadow-lg m-3"
                alt="Avatar" />
                <span className="font-semibold text-xl tracking-tight m-3">Adam Flatley</span>
                <p className="text-white dark:text-neutral-400 m-3">Full Stack Developer</p>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <HeaderTab TabName={"Blog"} />
                    <HeaderTab TabName={"About"} />
                    <HeaderTab TabName={"Links"} />
                </div>
            </div>
        </nav>
)
}

export default Header;

