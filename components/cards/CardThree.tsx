import { Post } from "@/types";
import { Icon } from "@iconify/react";
import Image from "next/image";

const CardThree = ({
  title,
  description,
  profileImg,
  bannerImg,
  author,
  date,
}: Post) => {
  return (
    <div className="bg-white p-2 rounded-2xl w-full flex md:grid md:grid-cols-2 gap-3 drop-shadow">
      <div className="relative md:w-full w-1/3 ">
        <Image
          src={bannerImg}
          alt="banner"
          fill
          style={{ borderRadius: "12px", objectFit: "cover" }}
        />
      </div>
      <div className="w-2/3 md:w-full flex flex-col gap-2">
        <div>
          <span className="text-black font-medium line-clamp-1">{title}</span>
        </div>
        <div>
          <span className="text-black-75 text-sm line-clamp-2">
            {description}
          </span>
        </div>
        <div className="bg-gray rounded-lg p-2 flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3">
            <div
              style={{
                position: "relative",
                width: "44px",
                height: "44px",
              }}
            >
              <Image
                src={profileImg}
                alt="author"
                fill
                style={{ borderRadius: "12px" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-black font-medium text-sm">{author}</span>
              <span className="text-black-75 text-xs">{date}</span>
            </div>
          </div>
          <div className="cursor-pointer">
            <Icon
              icon="bi:bookmark"
              style={{ fontSize: "16px", color: "#b1abab" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardThree;
