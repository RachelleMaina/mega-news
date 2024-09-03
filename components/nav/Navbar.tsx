"use client";

import Link from "next/link";
import Dropdown from "../shared/Dropdown";
import CustomDropDownLink from "../shared/CustomDropdownLink";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import Search from "../shared/Search";


const CustomNavLink = ({ href, children }: { href: string, children: ReactNode}) => {
  return (
    <Link href={href} className="relative inline-block">
      <span className="font-medium text-black hover-underline">{children}</span>
      <style jsx>{`
        .hover-underline::after {
            content: '';
          position: absolute;
          width: 0;
          height: 4px; 
          background-color: var(--brand);
          border-radius: 2px; 
          left: 0;
          bottom: -2px;
          transition: width 0.3s ease;
        }
        .hover-underline:hover::after {
          width: 15%;
        }
      `}</style>
    </Link>
  );
};

const Navbar = () => {


  return (
    <>
    <header className="bg-white my-4 hidden md:block">
      <div className="container mx-auto p-4">
        {/* Navbar Links */}
        <nav className="flex items-center justify-between space-x-4">
          <div className="flex items-center justify-between  gap-5">
            {/* Brand */}
            <div className="text-xl font-bold text-brand">
              <Link href="/">MEGA.news</Link>
            </div>

            {/* Categories Dropdown */}
            <Dropdown label="Categories">
              <CustomDropDownLink href="/cat1">
                Subcategory 1
              </CustomDropDownLink>
              <CustomDropDownLink href="/cat1">
                Subcategory 2
              </CustomDropDownLink>
              <CustomDropDownLink href="/cat1">
                Subcategory 3
              </CustomDropDownLink>
            </Dropdown>

            {/* Pages Dropdown */}
            <Dropdown label="Pages">
              <CustomDropDownLink href="/cat1">Pages 1</CustomDropDownLink>
              <CustomDropDownLink href="/cat1">Pages 2</CustomDropDownLink>
              <CustomDropDownLink href="/cat1">Pages 3</CustomDropDownLink>
            </Dropdown>

            {/* Other Links */}
            <CustomNavLink href="contact">Contact Us</CustomNavLink>
            <CustomNavLink href="about">About Us</CustomNavLink>
          </div>
          <div className="flex items-center justify-between gap-5">
            {/* Search */}
            <Search/>
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
        </nav>
      </div>
      </header>
     
      </>
  );
};

export default Navbar;
