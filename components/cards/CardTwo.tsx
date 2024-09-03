"use client";

import { BannerPost } from "@/types";
import Image from "next/image";

const CardTwo = ({ title, description, bannerImg }: BannerPost) => {
  return (
    <div className="sm:hidden md:hidden lg:block relative w-1/4 h-96 overflow-hidden rounded-xl">
      <div className="h-96 relative">
        <Image
          src={bannerImg}
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute bottom-0 left-2 right-2 bottom-2 bg-white bg-opacity-75 rounded-md p-4">
        <div>
          <span className="text-black text-md font-medium line-clamp-1 mb-2" style={{color:"#000"}}>
            {title}
          </span>
        </div>
        <div>
          <span className="text-black-75 text-sm line-clamp-2">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CardTwo;
