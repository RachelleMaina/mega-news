"use client";

import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";



const TopTags = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
  
    const containerRef = useRef < HTMLDivElement| null>(null);
  const tags = [
    {
      label: "Food",
      bgImage: "/images/tag5.jpg",
    },
    {
      label: "Animal",
      bgImage: "/images/tag2.jpg",
    },
    { label: "Car",    bgImage: "/images/tag4.jpg", },
    {
      label: "Sport",
      bgImage: "/images/tag7.jpg",
    },
    {
      label: "Music",
      bgImage: "/images/tag6.jpg",
    },
    {
      label: "Technology",
      bgImage: "/images/tag8.jpg",
    },
    {
      label: "Abstract",
      bgImage: "/images/tag1.jpg",
      },
      {
        label: "Animal",
        bgImage: "/images/tag2.jpg",
      },
      { label: "Car",    bgImage: "/images/tag4.jpg", },
  ];

  const cardWidth = 130; // Card width in pixels
  const visibletags = 7.5; // Number of visible tags

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const totalWidth = container.scrollWidth;
        const visibleWidth = container.clientWidth;

        setShowLeftArrow(scrollIndex > 0);
        setShowRightArrow(totalWidth > visibleWidth && scrollIndex < tags.length - Math.floor(visibletags));
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [scrollIndex, tags.length]);

  const handleNext = () => {
    if (scrollIndex < tags.length - Math.floor(visibletags)) {
      setScrollIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="lg:block md:hidden sm:hidden hidden container mx-auto p-4">
      <div className="relative w-full  bg-gray p-3 rounded-lg">
        <div className="relative w-full overflow-hidden" ref={containerRef}>
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{ transform: `translateX(-${scrollIndex * cardWidth}px)` }}
          >
            {tags.map((tag, index) => (
                 <div
                 key={index}
                className='flex flex-row items-center justify-center rounded-lg flex-shrink-0 p-2 text-white bg-cover bg-center relative'
              style={{width:cardWidth}}
               >
                  {/* Background Image with Blur */}
             <div
               className='absolute inset-0 rounded-lg bg-cover bg-center'
               style={{
                 backgroundImage: `url(${tag.bgImage})`,
                   zIndex: -1,
                   filter: 'blur(1px)',
               }}
             ></div>
             {/* Tag Label */}
             <span className="z-10">
               #{tag.label}
             </span>
               </div>
            ))}
                  </div>
                   {/* Next tags Indicator */}
          {showRightArrow && (
            <div  className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray to-transparent pointer-events-none" />
          )}

          {/* Scroll Buttons */}
          {showLeftArrow && (
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray p-2 rounded"
              onClick={handlePrev}
            >
              <Icon
              icon="octicon:chevron-left-16"
              style={{
                fontSize: "18px",
                color: "#3E3232",
              }}
            />
            </button>
          )}
          {showRightArrow && (
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray p-2 rounded"
              onClick={handleNext}
            >
              <Icon
                icon="octicon:chevron-right-16"
                style={{
                  fontSize: "18px",
                  color: "#3E3232",
                }}
              />
            </button>
           )} 

         
        </div>
      </div>
    </section>
  );
};

export default TopTags;
