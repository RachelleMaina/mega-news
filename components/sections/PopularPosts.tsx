"use client";

import { Icon } from "@iconify/react";
import CardOne from "../cards/CardOne";
import SectionTitle from "./SectionTitle";
import { useRef, useState } from "react";

const PopularPosts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidthRef = useRef<HTMLDivElement | null>(null); // Reference to calculate the width of each card

  
  const handleNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const posts = [
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "nmnm",
      author: "James",
      date: "August 18 , 2022",
    },
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "nmnm",
      author: "James",
      date: "August 18 , 2022",
    },
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "nmnm",
      author: "James",
      date: "August 18 , 2022",
    },
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "nmnm",
      author: "James",
      date: "August 18 , 2022",
    },
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "nmnm",
      author: "James",
      date: "August 18 , 2022",
    },
  ];
  return (
    <section className="container mx-auto p-4">
      <SectionTitle
        title="Popular Posts"
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentIndex={currentIndex}
        postsCount={posts.length}
      />
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 gap-5"
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidthRef.current?.offsetWidth || 0)
            }px)`,
          }}
        >
          {posts.map((post, i) => (
              <div
              key={i.toString()}
              ref={cardWidthRef}
              className="w-1/4 flex-shrink-0 flex items-center justify-center"
            >
              <CardOne {...post} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularPosts;
