import Link from "next/link";
import Title from "../shared/Title";
import { Icon } from "@iconify/react";
import Copyright from "./Copyright";
import Image from "next/image";

const MegaNews = () => {
  return (
    <div className="lg:w-1/2 md:w-full sm:w-full w-full bg-gray rounded-r-3xl py-5 ">
      <div className="grid grid-cols-2 gap-5 lg:pl-20 md:pl-20 sm:pl-20">
        <div>
          <Title title="Mega News" />

          <p className="text-black-75 text-sm text-justify mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin
          </p>
        </div>
        <div>
          <Title title="Categories" />
          <ul className="list-none p-0 mt-5">
            <li className="mb-2 ml-3">
              <Link
                href={""}
                className="text-black-75 text-sm  hover:underline"
              >
                Culture
              </Link>
            </li>
            <li className="mb-2 ml-3">
              <Link
                href={""}
                className="text-black-75 text-sm  hover:underline"
              >
                Fashion
              </Link>
            </li>
            <li className="mb-2 ml-3">
              <Link
                href={""}
                className="text-black-75 text-sm  hover:underline"
              >
                Featured
              </Link>{" "}
            </li>
            <li className="mb-2 ml-3">
              <Link
                href={""}
                className="text-black-75 text-sm  hover:underline"
              >
                Food
              </Link>
            </li>
            <li className="mb-2 ml-3">
              <Link
                href={""}
                className="text-black-75 text-sm  hover:underline"
              >
                Healthy Living
              </Link>
            </li>
            <li className="mb-2 ml-3">
              <Link
                href={""}
                className="text-black-75 text-sm  hover:underline"
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Title title="Newsletters" />
          <div className="bg-white p-2 rounded-md flex flex-row justify-between items-center mt-5">
            <input
              placeholder="Write your email"
              className="placeholder:text-xs placeholder:text-black-75"
            />
            <Icon
              icon="tabler:mail-filled"
              style={{ fontSize: "18px", color: "#b1abab" }}
            />
          </div>
        </div>
        <div>
          <Title title="Social Network" />
          <div className="flex flex-row gap-2 mt-5">
            <Image
              src="/images/insta.png"
              alt="insta"
              width={128}
              height={40}
            />
            <Image
              src="/images/twitter.png"
              alt="twitter"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};
export default MegaNews;
