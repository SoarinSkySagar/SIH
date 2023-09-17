import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    
    const location = useLocation();
    const nav = useNavigate();
    function pathMatchRoute(path) {
        if (path ===  location.pathname) {
            return true;
        }
    }

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 mx-7 max-w-full mx-auto'>
            <div>
                <img src="/demoLogo.jpeg" alt="logo" className='h-5 cursor-pointer' onClick={() => nav("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/about") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/about")}>About Us</li>
                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/contact") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/contact")}>Contact Us</li>                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/login") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/login")}>Login</li>
                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/register") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/register")}>Register</li>
                </ul>
            </div>
            </header>
        </div>
    )
}
