'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <div className="text-2xl font-bold text-brand">
          <Link href="/">MEGA.news</Link>
        </div>

        {/* Navbar Links */}
        <nav className="flex items-center space-x-4">
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="text-black hover:text-blue-500"
            >
              Categories
            </button>
            {isCategoriesOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded-md">
                <Link href="/category1" className="block px-4 py-2 hover:bg-gray-100">Category 1</Link>
                <Link href="/category2" className="block px-4 py-2 hover:bg-gray-100">Category 2</Link>
                <Link href="/category3" className="block px-4 py-2 hover:bg-gray-100">Category 3</Link>
              </div>
            )}
          </div>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="custom-link text-black font-medium hover:text-blue-500"
            >
              Pages
            </button>
            {isPagesOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded-md">
                <Link href="/page1" className="block px-4 py-2 hover:bg-gray-100">Page 1</Link>
                <Link href="/page2" className="block px-4 py-2 hover:bg-gray-100">Page 2</Link>
                <Link href="/page3" className="block px-4 py-2 hover:bg-gray-100">Page 3</Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link href="/contact" className="hover:text-blue-500">Contact Us</Link>
          <Link href="/about" className="hover:text-blue-500">About Us</Link>

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-2 py-1"
            />
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="hover:text-blue-500"
            >
              Profile
            </button>
            {isProfileOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded-md">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                <Link href="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
