// components/NavbarResponsive.tsx
import React from 'react';
import Link from 'next/link';
import { IoPersonOutline, IoAlert, IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';

const NavbarResponsive = () => {
    return (
        <nav className="flex justify-between items-center w-full h-[100px] sm:h-[300px] bg-[#FBEBB5] px-6">
            {/* Navigation Links */}
            <div className="font-bold text-[#000000] space-x-[80px]">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
                <Link href="/About" className="hover:text-blue-500">About</Link>
                <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
            </div>

            {/* Icon Links */}
            <div className="flex items-center space-x-4 lg:space-x-[60px] text-xl">
                <Link href="/Account">
                    <span className="flex items-center">
                        <IoPersonOutline className="hover:text-blue-500 cursor-pointer" />
                        <IoAlert className="hover:text-blue-500 cursor-pointer ml-2" />
                    </span>
                </Link>
                <IoSearchOutline className="hover:text-blue-500 cursor-pointer" />
                <FaRegHeart className="hover:text-blue-500 cursor-pointer" />
                <Link href="/Cart">
                    <BsCart3 className="hover:text-blue-500 cursor-pointer" />
                </Link>
            </div>
        </nav>
    );
};

export default NavbarResponsive;



<nav className="flex justify-center w-full h-[100px] sm:[300px] md:flex-col lg:flex-row  bg-[#FBEBB5]">
            <div className="flex  items-center max-w-7xl   px-6 py-4  ">
                {/* Navigation Links */}
                <div className="  font-bold text-[#000000] space-x-[80px]">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
                    <Link href="/About" className="hover:text-blue-500">About</Link>
                    <Link href="/Contact" className="hover:text-blue-500">Contact</Link>

                </div>

                {/* Icon Links */}
                <div className="flex sm:hidden md:[400px] lg:block space-x-4 lg:space-x-[60px] text-xl absolute lg:end-18 right-10 lg:right-[140px]">

                    <Link href="/Account" > <span className='flex'><IoPersonOutline className="hover:text-blue-500 cursor-pointer" /><p> <IoAlert className="hover:text-blue-500 cursor-pointer" /></p></span></Link>

                    <IoSearchOutline className="hover:text-blue-500  cursor-pointer" />
                    <FaRegHeart className="hover:text-blue-500  cursor-pointer" />
                    <Link href="/Cart"> <BsCart3 className="hover:text-blue-500 cursor-pointer" /></Link>

                </div>

            </div>
        </nav>
