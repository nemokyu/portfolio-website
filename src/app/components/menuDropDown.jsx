import React from 'react';
import NavLink from './NavLink';

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

function menuDropDown(){
  return (
    <ul className='flex flex-col py-4 items-center'>
        {navLinks.map((link, index) => (
                <li key={index}> 
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
    </ul>
  );
};

export default menuDropDown;
