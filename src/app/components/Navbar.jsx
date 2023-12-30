"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import menuDropDown from './menuDropDown'


const navLinks = [
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Projects",
        href: "#projects"
    },
    {
        title: "Contact",
        href: "#contact"
    }
];


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p4-4'>
            <Link href={"/"} className='text-3xl md:text-5xl px-10 font-semibold text-white'>
                ✩
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    navbarOpen ? (
                        <button onClick = {() => setNavbarOpen(false)} className='flex itemds-center px-3 py-2 mr-8 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    ) : (
                        <button onClick = {() => setNavbarOpen(true)} className='flex itemds-center px-3 py-2 mr-8 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id ="navbar">
                <ul className='flex p-4 md:p-0 sm: md:flex-row md:space-x-10 mt-0'>
                    {navLinks.map((link, index) => (
                            <li key={index}> {NavLink(link.href, link.title)} </li>
                        ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <div>{menuDropDown()}</div> : null}
    </nav>
    
  )
}

export default Navbar
