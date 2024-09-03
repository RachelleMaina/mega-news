"use client";

import { BannerPost } from "@/types";
import Image from "next/image";

const CardFour = ({ title, description, bannerImg }: BannerPost) => {
  return (
    <div className="h-full bg-white p-2 rounded-2xl grid grid-cols-2 gap-3">
      <div className="relative w-full">
        <Image
          src={bannerImg}
          alt="banner"
          fill
          style={{ borderRadius: "12px", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-between gap-2 m-2">
        <div>
          <span className="text-black font-medium line-clamp-1">{title}</span>
        </div>
        <div>
          <span className="text-black-75 text-sm line-clamp-6">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CardFour;
