'use client'; // This is the Client Component declaration

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearchOutline, IoPersonOutline, IoAlert } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";
import Grid from '../components/Grid';

const Shop = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Added state for menu toggle

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center w-full h-[100px] sm:h-[120px] bg-[#ffffff] px-6">
        <div className="flex w-full items-center justify-between max-w-7xl">
          {/* Navigation Links */}
          <div className="font-bold text-[#000000] space-x-[80px] absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
            <Link href="/About" className="hover:text-blue-500">About</Link>
            <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
          </div>

          {/* Icon Links */}
          <div className="hidden sm:hidden md:flex lg:flex space-x-4 lg:space-x-[60px] text-xl absolute right-16 mr-[50px]">
            <Link href="/Account">
              <span className="flex items-center">
                <IoPersonOutline className="hover:text-blue-500 cursor-pointer" />
                <IoAlert className="hover:text-blue-500 cursor-pointer ml-2" />
              </span>
            </Link>
            <IoSearchOutline className="hover:text-blue-500 cursor-pointer" />
            <FaRegHeart className="hover:text-blue-500 cursor-pointer" />
            <Link href="/Asgard">
              <BsCart3 className="hover:text-blue-500 cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>















      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="w-full lg:hidden bg-[#FFFFFF] flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
          <Link href="/About" className="hover:text-blue-500">About</Link>
          <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
        </div>
      )}

      {/* Hero Section */}
      <div className="w-full flex justify-center  mx-[30px] object-cover">
        <Image src="/images/Bg.png" alt="bg" width={1640} height={316} />
      </div>




      <nav className='w-full flex flex-col justify-between  bg-[#FAF4F4]  border-2 border-[#9F9F9F]  mx-[30px] h-[100px]  mt-[20px] shadow-md '>
        <div className=' flex  justify-between gap-4    border-[0px]   '>
          <div className=' md:inline-flex  lg:flex  hidden mx-[70px] items-center gap-4   border-[0px] '>

            <Link className='w-[30px] h-[30px] px-5 mt-4 ' href="href"><HiAdjustmentsHorizontal /></Link>
            <Link className='w-[40px] h-[48px] mt-[25px] ' href="href"> Filter</Link>

            <Link className='w-[38px] h-[28px] mt-[14px] ' href="href"><HiMiniSquares2X2 /></Link>


            <Link className='w-[24px] h-[24px] mt-[10px]  ' href="href"><BsViewList /></Link>

            <Link className=' mb-[20px]  ml-[40px] space-x-8  flex justify-center font-sans ' href="href"> <span className='text-[50px] text-[#9F9F9F]'> | </span>
              <span className='text-black mt-[35px] space-x-5'>Showing 1–16 of 32 results</span> </Link>
          </div>
          <div className=' flex  items-center gap-0  mx-[80px] border-[0px]'>
            <Link className='py-[30px] px-[0px] space-x-6' href="href"> <span>Show</span>
              <span className='py-[15px] px-[20px] rounded-md bg-white'>16</span></Link>

            <Link className='py-[30px] px-[50px] space-x-6' href="href"> <span>Short by</span>
              <span className='py-[15px] px-[38px] rounded-md bg-white'>Default</span></Link>

          </div>

        </div>
      </nav>







      {/* Filter and Sorting Section */}


      <Grid />

      <div className="bg-[#FAF4F4] mt-[80px] mx-[30px]">
        <div className="flex justify-center items-center gap-[60px] h-[300px] w-full  mx-[30px]">
          <div className="w-[376px] h-[108px] bg-[#FAF4F4]">
            <h1 className="font-poppins text-[32px] font-medium hover:text-blue-500 text-[#000000] leading-[48px]">Free Delivery</h1>
            <p>For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="w-[376px] h-[108px]">
            <h1 className="font-poppins text-[32px] font-medium hover:text-blue-500 text-[#000000] leading-[48px]">90 Days Return</h1>
            <p>If goods have problems, consectetur adipim scing elit.</p>
          </div>

          <div className="w-[376px] h-[108px]">
            <h1 className="font-poppins text-[32px] font-medium hover:text-blue-500 text-[#000000] leading-[48px]">Secure Payment</h1>
            <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
