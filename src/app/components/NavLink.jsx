// NavLink.jsx
import Link from 'next/link';

const NavLink = ({ href, title }) => {
    return (
        <Link href={href}>
            <span 
            className='block py-2 pl-3 pr-4 text-[#b9b9b9] sm:text-xl md:p-0 rounded hover:text-white cursor-pointer'>
                {title}
            </span>
        </Link>
    );
};

export default NavLink;
