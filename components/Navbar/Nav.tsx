'use client';
import { NavLinks } from '@/constant/constant';
import { MenuIcon, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {
    openNav: () => void;
};

const Nav = ({openNav}:Props) => {

    const [ navBg, setNavBg ] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true)
            if(window.scrollY < 90) setNavBg(false)
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);

    }, []);

    const bg_style = navBg ? "bg-gray-900 shadow-md" : "";

    return (
        <div className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto 
        transition-all duration-200`}>
            {/*Logo*/}
            <h1 className='text-3xl text-white font-bold ml-8 md:ml-16'>ImageAI</h1>
            <div className='md:flex items-center space-x-10 hidden'>
                {/*NavLink*/}
                {NavLinks.map((link) => (
                    <Link
                    key={link.id}
                    href={link.url}
                    className="relative text-white text-base w-fit block after:block after:content-[''] after:h-[3px] after:bg-yellow-400 after:w-full after:translate-y-0 after:scale-x-0 after:hover:scale-x-100 after:hover:translate-y-2 after:transition-all after:duration-300 after:origin-center"
                  >
                    <p>{link.label}</p>
                  </Link>
                ))}
            </div>
            {/*Buttons and Icons*/}
            <div className='flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16'>
                <ShoppingCart className='cursor-pointer w-6 h-6' />
                <Search className='cursor-pointer w-6 h-6' />
                <MenuIcon 
                    onClick={openNav} 
                    className='cursor-pointer w-6 h-6 md:hidden' 
                />
            </div>
        </div>
    );
};

export default Nav;