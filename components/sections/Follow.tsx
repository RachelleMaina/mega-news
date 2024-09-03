import React from "react";
import Title from "../shared/Title";

const Follow = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image4.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
  ];
  return (
    <div className="w-1/2 lg:pr-8 md:pr-8 sm:pr-8">
      <Title title="Follow on Instagram" />
      <div className="grid grid-cols-3 gap-5 mt-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-20 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Follow;
