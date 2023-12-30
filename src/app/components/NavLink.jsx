import Link from "next/link"
// ReUse this component to reduce code redundancy 

function NavLink(href, title) {
    return (
            <Link href={href} 
            className='block py-2 pl-3 pr-4 text-[#b9b9b9] sm:text-xl md:p-0 rounded 
             hover:text-white'>
                {title}
            </Link>
    );
}


export default NavLink;