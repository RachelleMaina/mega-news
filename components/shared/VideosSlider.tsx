"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { BannerPost } from "@/types";
import SectionTitle from "./SectionTitle";

const VideosSlider = ({
  posts,
  title,
}: {
  posts: BannerPost[];
  title: string;
}) => {
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
    <section className="bg-gray mx-auto px-2 pt-6 pb-8 lg:hidden md:hidden sm:hidden">
      <SectionTitle
        title={title}
        handleNext={handleNext}
        handlePrev={handlePrev}
        rightDisabled={currentIndex >= posts.length}
        leftDisabled={currentIndex === 0}
      />

      <div className="relative w-full h-80 overflow-hidden rounded-xl mt-4">
        <div className="h-80 relative">
          <Image
            src={posts[currentIndex].bannerImg}
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-lg p-1.5"
          >
            <Icon
              icon="octicon:chevron-left-16"
              style={{
                fontSize: "18px",
                color: currentIndex === 0 ? "#b1abab" : "#000",
              }}
            />
          </button>
          <div className="cursor-pointer flex flex-row justify-center text-brand items-center bg-white bg-opacity-75 rounded-full w-20 h-20">
            <Icon icon="ph:play-fill" style={{ fontSize: "40px" }} />
          </div>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-lg p-1.5"
          >
            <Icon
              icon="octicon:chevron-right-16"
              style={{
                fontSize: "18px",
                color: currentIndex >= posts.length ? "#b1abab" : "#000",
              }}
            />
          </button>
        </div>

        <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-75 p-4 rounded-md">
          <div>
            <span
              className="text-black text-md font-medium line-clamp-1 mb-2"
              style={{ color: "#000" }}
            >
              {posts[currentIndex].title}
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default VideosSlider;
