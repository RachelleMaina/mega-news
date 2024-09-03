import { Icon } from "@iconify/react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  profileImg: string;
  author: string;
  date: string;
}

const CardOne = ({ title, description, profileImg, author, date }: Props) => {
  return (
    <div className="bg-white p-2 rounded-2xl flex flex-col gap-2 shadow-md">
      <div
        style={{
          position: "relative",
          height: "190px",
        }}
      >
        <Image
          src="/images/image1.jpg"
          alt="banner"
          fill
          style={{ borderRadius: "12px" }}
        />
      </div>
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
             position:"relative",
              width: "44px",
              height: "44px",
         
            }}
          >
               <Image
          src="/images/james.jpg"
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
  );
};
export default CardOne;
