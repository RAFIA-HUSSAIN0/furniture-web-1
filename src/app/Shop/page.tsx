'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center w-full h-[100px] sm:h-[120px] bg-[#ffffff] px-6">
        <div className="flex w-full items-center justify-between max-w-7xl">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-[80px] font-bold text-[#000000]">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
            <Link href="/About" className="hover:text-blue-500">About</Link>
            <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] flex flex-col items-center space-y-4 py-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link href="/Shop" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Shop</Link>
          <Link href="/About" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">About</Link>
          <Link href="/Contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Shop;
