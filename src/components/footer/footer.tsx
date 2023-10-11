
import React from 'react'

const Footer = () => {
    return (
        <footer className="flex-row mt-auto bg-teal-500 p-6">
            <div className= "flex-col">
                <b>Have a suggestion for something I could do better or just want to get in contact?</b>
                <b>Pop it in the suggestions box and I'll get round to it when I can!</b>
            </div>
            <input type="text" name="Contact/Feedback" id="Contact/Feedback" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="If you're trying to start a conversation leave some contact information or contact me via LinkedIn instead!" />
        </footer>
)
}

export default Footer;

