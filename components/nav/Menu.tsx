"use client";

import { ReactNode } from "react";
import Link from "next/link";

const CustomLink = ({
  href,
  children,
  isActive = false,
}: {
  href: string;
  children: ReactNode;
  isActive: boolean;
}) => {
  return (
    <div className="mx-5">
      <Link
        href={href}
        className={`relative inline-block rounded-lg w-full p-2 ${
          isActive && "bg-gray"
        }`}
      >
        <div className="flex items-center">
          {isActive && (
            <div className="h-3 w-1 bg-brand rounded-full mr-2"></div>
          )}
          <span className="font-medium text-sm">{children}</span>
        </div>
      </Link>
    </div>
  );
};

const Button = ({
  handleClick,
  label,
  isOpen,
  isActive,
}: {
  handleClick: () => void;
  label: string;
  isOpen: boolean;
  isActive: boolean;
}) => {
  return (
    <div className="mx-5">
      <button
        className={`text-left flex justify-between items-center rounded-lg w-full p-2 ${
          isActive && "bg-gray"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center">
          {isActive && (
            <div className="h-3 w-1 bg-brand rounded-full mr-2"></div>
          )}
          <span className="font-medium text-sm">{label}</span>
        </div>
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
            d={isOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </button>
    </div>
  );
};

const Menu = ({
  toggleSubMenu,
  toggleDrawer,
  activeMenu,
  isOpen,
}: {
  toggleDrawer: () => void;
  isOpen: boolean;
  activeMenu: string | null;
  toggleSubMenu: (menu: string | null) => void;
}) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div>
        <div className="mx-5 flex justify-between items-center">
          <div className="text-xl font-bold text-brand py-3">
            <Link href="/">MEGA.news</Link>
          </div>

          {/* Close Button */}
          <button
            className="rounded-lg p-1.5"
            onClick={toggleDrawer}
            style={{
              backgroundColor: "rgba(62, 50, 50, 0.05)",
            }}
          >
            {/* Icon: Close */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="var(--black-75)"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="mt-2">
          <ul className="space-y-4 text-lg text-gray-800">
            <li>
              <Button
                isActive={true}
                isOpen={activeMenu === "category"}
                handleClick={() => toggleSubMenu("category")}
                label={"Category"}
              />

              {activeMenu === "category" && (
                <ul className="pl-5 py-3 mt-2 space-y-4 bg-gray text-xs hover-brand curor-pointer">
                  <li>
                    <Link href="#team">Sub menu</Link>
                  </li>
                  <li>
                    <Link href="#history">Sub menu</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Button
                isActive={false}
                isOpen={activeMenu === "pages"}
                handleClick={() => toggleSubMenu("pages")}
                label={"Pages"}
              />

              {activeMenu === "pages" && (
                <ul className="pl-5 py-3 mt-2 space-y-4 bg-gray text-xs hover-brand curor-pointer">
                  <li>
                    <Link href="#team">Sub menu</Link>
                  </li>
                  <li>
                    <Link href="#history">Sub menu</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <CustomLink href="#home" isActive={false}>
                About Us
              </CustomLink>
            </li>
            <li>
              <CustomLink href="#home" isActive={false}>
                Contact Us
              </CustomLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Menu;
