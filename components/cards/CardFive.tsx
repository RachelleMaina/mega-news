"use client";

import { BannerPost } from "@/types";
import Image from "next/image";
import { Icon } from "@iconify/react";

const CardFive = ({ title, description, bannerImg }: BannerPost) => {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      <div className="h-96 relative">
        <Image
          src={bannerImg}
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="cursor-pointer flex flex-row justify-center text-brand items-center bg-white bg-opacity-75 rounded-full w-20 h-20">
        <Icon
            icon="ph:play-fill"
            style={{ fontSize: "40px" }}
          />
        
        </div></div>
      
      <div className="absolute left-2 right-2 bottom-2 bg-white bg-opacity-75 rounded p-4">
        <div>
        <span className="text-black text-md font-medium line-clamp-1 mb-2" style={{color:"#000"}}>
            {title}
          </span>
        </div>
        <div className='lg:block md:hidden sm:hidden'>
          <span className="text-black-75 text-sm line-clamp-2">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CardFive;
