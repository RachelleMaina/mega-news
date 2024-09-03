"use client";

import { useState } from "react";
import CardFour from "../cards/CardFour";
import SectionTitle from "../shared/SectionTitle";
import CardFive from "../cards/CardFive";
import VideosSlider from "../shared/VideosSlider";

const LatestVideos = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const videos = {
    featured: {
      title:
        "How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)",
      description:
        "You’ve read all your free member-only stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.",
      bannerImg: "/images/video1.jpg",
    },
    grid: [
      {
        title: "5 reasons why you should wrap your hands when boxing",
        description:
          "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands.",
        bannerImg: "/images/video4.jpg",
      },
      {
        title: "Music Genre Classification with Python",
        description:
          "A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.",

        bannerImg: "/images/video3.jpg",
      },
      {
        title: "How we built the first real self-driving car",
        description: "Description 3",
        bannerImg: "/images/video2.jpg",
      },
      {
        title: "How to Persuade Your Parents to Buy Fast Food",
        description: "Description 4",
        bannerImg: "/images/video1.jpg",
      },
    ],
  };

  const featuredVideo = videos.featured;
  const cards = videos.grid;

  const itemsPerColumn = 2; // Two rows per column
  const numColumns = Math.ceil(cards.length / itemsPerColumn);

  const handleNext = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % numColumns);
  };

  const handlePrev = () => {
    setScrollIndex((prevIndex) => (prevIndex - 1 + numColumns) % numColumns);
  };

  return (
    <>
  <section className="bg-gray mx-auto pt-4 pb-8 hidden lg:block md:block sm:block">
      <SectionTitle
        title="Latest Videos"
        handleNext={handleNext}
        handlePrev={handlePrev}
        leftDisabled={scrollIndex === 0}
        rightDisabled={scrollIndex >= numColumns - 1}
      />
      <div className="container mx-auto">
        <div className="flex gap-5">
          {/* Left column - Single featured video */}
          <div className="lg:w-1/2 md:w-full sm:w-full w-full">
            <CardFive {...featuredVideo} />
          </div>

          <div className="lg:block md:hidden sm:hidden hidden relative w-1/2 h-96 overflow-hidden">
            <div
              className="h-full flex transition-transform duration-500"
              style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
            >
              {Array.from({ length: numColumns }).map((_, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col gap-4 w-full"
                  style={{ minWidth: `100%` }} // Adjust for one column view
                >
                  {cards
                    .slice(
                      columnIndex * itemsPerColumn,
                      columnIndex * itemsPerColumn + itemsPerColumn
                    )
                    .map((card, index) => (
                      <CardFour key={index} {...card} />
                    ))}
                </div>
              ))}
            </div>

            {/* Next Column Indicator */}
            {/* <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray to-transparent pointer-events-none" /> */}
          </div>
        </div>
      </div>
      </section>
      
        {/* Mobile view */}
        <VideosSlider posts={[featuredVideo, ...cards]} title={"Latest Videos"}/>
      </>
  );
};

export default LatestVideos;
