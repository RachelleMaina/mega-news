"use client";

import CardOne from "../cards/CardOne";
import SectionTitle from "../shared/SectionTitle";
import { useEffect, useRef, useState } from "react";
import { Post } from "@/types";
import PostsSlider from "../shared/PostsSlider";

const PostsSection = ({ posts, title }: { posts: Post[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardWidthRef = useRef<HTMLDivElement | null>(null); // Reference to calculate the width of each card

  useEffect(() => {
    if (cardWidthRef.current) {
      setCardWidth(cardWidthRef.current.offsetWidth + 80); // Include the gap
    }
  }, []);

  const handleNext = () => {
    // Adjust condition to prevent the last card from being cut off
    if (currentIndex < posts.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };



  return (
    <>
    <section className="mx-auto pt-6 pb-8 hidden md:block">
      <SectionTitle
        title={title}
        handleNext={handleNext}
        handlePrev={handlePrev}
        rightDisabled={currentIndex >= posts.length - 4}
        leftDisabled={currentIndex === 0} />

      <div className="overflow-hidden relative container mx-auto">
        <div
          className="flex transition-transform duration-500 gap-5 p-2"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {posts.map((post, index) => {
            const isLastVisibleCard = index === currentIndex + 3;
            const isNotLastCard = index !== posts.length - 1;

            return (
              <div
                key={index}
                ref={index === 0 ? cardWidthRef : null} // Set ref only on the first card
                className={`lg:w-1/4 md:w-1/2 sm:w-screen flex-shrink-0 flex items-center justify-center ${isLastVisibleCard && isNotLastCard ? 'opacity-60' : ''
                  }`}
              >
                <CardOne {...post} />
              </div>
            );
          })}

        </div>
      </div>
      </section>
      {/* Mobile view */}
      <PostsSlider posts={posts} title={title}/>
      </>
  );
};
export default PostsSection;
