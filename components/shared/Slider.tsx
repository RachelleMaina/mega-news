'use client'

import { useState } from 'react';
import Image from "next/image";
import { Icon } from '@iconify/react';
import { BannerPost } from '@/types';

const Slider = ({ posts }: { posts: BannerPost[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first image
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(posts.length - 1); // Loop back to the last image
    }
  };

  return (
    <div className="relative lg:w-1/2 md:w-full sm:w-full h-96 overflow-hidden rounded-xl">
      <div className="w-full h-full">

        <Image
          src={posts[currentIndex].bannerImg}
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-2 right-2 bottom-2 bg-white bg-opacity-75 rounded-lg p-4">

          <div>
          <span className="text-black text-md font-medium line-clamp-1 mb-2" style={{color:"#000"}}>
{posts[currentIndex].title}</span>
          </div>
          <div className='lg:block md:hidden sm:hidden'>
            <span className="text-black-75 text-sm line-clamp-2">
              {posts[currentIndex].description}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-lg p-1.5"
      >
        <Icon
          icon="octicon:chevron-left-16"
          style={{ fontSize: "18px", color: currentIndex === 0 ? "#b1abab" : "#000" }}
        />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-lg p-1.5"
      >
        <Icon
          icon="octicon:chevron-right-16"
          style={{ fontSize: "18px", color: currentIndex >= posts.length ? "#b1abab" : "#000" }}
        />
      </button>
    </div>
  );
};

export default Slider;

