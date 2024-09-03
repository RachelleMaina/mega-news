"use client";

import Link from "next/link";
import Dropdown from "../shared/Dropdown";
import CustomDropDownLink from "../shared/CustomDropdownLink";
import { Icon } from "@iconify/react";
import Search from "../shared/Search";
import Menu from "./Menu";
import { useState } from "react";

const TabNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu: string | null) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header
      className="relative bg-white my-4 hidden sm:block md:hidden"
      style={{
        boxShadow: "0px 0px 32px 0px rgba(0, 0, 0, 0.07)",
      }}
    >
      <div className="container mx-auto p-4">
        {/* Navbar Links */}

        <nav className="flex flex-col items-center gap-4 w-full">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between  gap-5">
              {/* Hamburger Button */}
              <button
                className="p-2 rounded-lg  focus:outline-none"
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
              {/* Brand */}
              <div className="text-xl font-bold text-brand">
                <Link href="/">MEGA.news</Link>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-5">
                {/* Profile Dropdown */}

                <Dropdown isProfile>
                  <CustomDropDownLink href="/cat1">
                    <Icon
                      icon="teenyicons:user-outline"
                      style={{
                        fontSize: "16px",
                        color: "var(--black-75)",
                      }}
                    />
                    Profile
                  </CustomDropDownLink>
                  <CustomDropDownLink href="/cat1">
                    <Icon
                      icon="material-symbols:bookmark-outline"
                      style={{
                        fontSize: "16px",
                        color: "var(--black-75)",
                      }}
                    />
                    Marked
                  </CustomDropDownLink>
                  <CustomDropDownLink href="/cat1">
                    <Icon
                      icon="material-symbols:logout"
                      style={{
                        fontSize: "16px",
                        color: "var(--black-75)",
                      }}
                    />
                    Exit
                  </CustomDropDownLink>
                </Dropdown>

                {/* Mark */}
                <button className="rounded-lg bg-gray p-2">
                  <Icon
                    icon="material-symbols:bookmark-outline"
                    style={{
                      fontSize: "19px",
                      color: "black",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Search */}
          <Search />
        </nav>
      </div>
      {/* Drawer Content */}
      <Menu
        activeMenu={activeMenu}
        toggleSubMenu={toggleSubMenu}
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
      />
    </header>
  );
};

export default TabNav;
