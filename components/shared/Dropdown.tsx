"use client";
import { Icon } from "@iconify/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";

const Dropdown = ({
  label,
  children,
  isProfile = false,
}: {
  label?: string;
  children: ReactNode;
  isProfile?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderArrow = () =>
    isOpen ? (
      <Icon
        icon="ion:chevron-up"
        style={{
          fontSize: "18px",
          color: "#b1abab",
          marginLeft: "2px",
        }}
      />
    ) : (
      <Icon
        icon="ion:chevron-down"
        style={{
          fontSize: "18px",
          color: "#b1abab",
          marginLeft: "2px",
        }}
      />
    );

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {isProfile ? (
        <div
          className="flex flex-row gap-1 justify-center items-center cursor-pointer"
          onClick={handleToggle}
        >
          <div
            style={{
              position: "relative",
              width: "36px",
              height: "36px",
            }}
          >
            <Image
              src={"/images/mary.jpg"}
              alt="author"
              fill
              style={{ borderRadius: "12px" }}
            />
          </div>
                  <span className="text-black font-medium">Behzad</span>
                  {renderArrow()}
        </div>
      ) : (
        <span
          className="font-medium text-black hover-underline flex items-center cursor-pointer"
          onClick={handleToggle}
        >
          {label}
       {renderArrow()}
        </span>
      )}

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white drop-shadow-xl-lg rounded-lg z-10"
          style={{
            marginTop: "8px",
            boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ul className="py-2">{children}</ul>
        </div>
      )}
      <style jsx>{`
        .hover-underline::after {
          content: "";
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
        .underline-active::after {
          width: 15%;
        }
      `}</style>
    </div>
  );
};

export default Dropdown;
