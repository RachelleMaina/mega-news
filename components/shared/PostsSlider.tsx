"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Post } from "@/types";
import SectionTitle from "./SectionTitle";
import CardOne from "../cards/CardOne";

const PostsSlider = ({ posts, title }: { posts: Post[]; title: string }) => {
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
    <section className="mx-auto px-2 pt-6 pb-8 md:hidden">
      <SectionTitle
        title={title}
        handleNext={handleNext}
        handlePrev={handlePrev}
        rightDisabled={currentIndex >= posts.length}
        leftDisabled={currentIndex === 0}
      />

      <div className="overflow-hidden relative container mx-auto mt-4">
        <CardOne
          title={posts[currentIndex].title}
          description={posts[currentIndex].description}
          profileImg={posts[currentIndex].profileImg}
          bannerImg={posts[currentIndex].bannerImg}
          author={posts[currentIndex].author}
          date={posts[currentIndex].date}
        />
      </div>
    </section>
  );
};

export default PostsSlider;
