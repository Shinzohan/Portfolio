"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const pathName = usePathname();
    
    return (
        <Link 
            href={link.url} 
            className={`rounded-full p-2 text-2xl transition-colors duration-300 ${
                pathName === link.url 
                    ? "bg-[#C73659]  text-white" 
                    : "hover:bg-gray-700"
            }`}
        >
            {link.icon}
        </Link>
    );
};

export default NavLink;