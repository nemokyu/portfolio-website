"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuDropDown from './menuDropDown';
import Image from 'next/image';
const navLinks = [
{
    title: "Home",
    href: "#home"
},

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
    
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80'>
        <div className='flex flex-wrap items-center justify-between mx-auto pr-4 mr-5 pt-3'>
            <Link href={"/"} className='text-3xl md:text-7xl px-10 font-semibold text-white pt-1'> 
                <Image src="icon.png" alt="logo" height="50" width="50"/>
             </Link>
            <div className="mobile-menu block md:hidden">
                {navbarOpen ? (
                    <button className='flex items-center px-3 py-2 mr-8 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 mr-8 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                    </button>
                )}
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 sm: md:flex-row md:space-x-10 mt-0'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.href} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen && <MenuDropDown />}
    </nav>
);
}

export default Navbar;
