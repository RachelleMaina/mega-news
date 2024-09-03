"use client";

import { useState } from "react";
import Link from "next/link";
import Search from "../shared/Search";
import Menu from "./Menu";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu: string | null) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="relative px-2 sm:hidden">
      <div className="gap-5 mt-2 flex items-center">
        {/* Hamburger Button */}
        <button
          className="p-2 rounded-lg focus:outline-none"
          onClick={toggleDrawer}
          style={{
            backgroundColor: "rgba(62, 50, 50, 0.05)",
          }}
        >
          {/* Icon: Hamburger */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--black-75)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Search */}
        <Search />
      </div>

      <Menu
        activeMenu={activeMenu}
        toggleSubMenu={toggleSubMenu}
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
      />
    </div>
  );
}
