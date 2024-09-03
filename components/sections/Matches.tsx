"use client";
import React from "react";
import Image from "next/image";
import Calendar from "react-calendar";

const Matches = () => {
  const rows = [
    {
      club: "Manchester City",
      img: "/images/manchester.jpg",
      gp: 38,
      w: 29,
      d: 29,
      l: 6,
      f: 99,
      a: 26,
      gd: 73,
      pts: 99,
    },
    {
      club: "Liverpool",
      img: "/images/liverpool.jpg",
      gp: 38,
      w: 29,
      d: 29,
      l: 6,
      f: 99,
      a: 26,
      gd: 73,
      pts: 99,
    },
    {
      club: "Chelsea",
      img: "/images/chelsea.jpg",
      gp: 38,
      w: 29,
      d: 29,
      l: 6,
      f: 99,
      a: 26,
      gd: 73,
      pts: 99,
    },
    {
      club: "Tottenham Hotspur",
      img: "/images/tottenham.jpg",
      gp: 38,
      w: 29,
      d: 29,
      l: 6,
      f: 99,
      a: 26,
      gd: 73,
      pts: 99,
    },
    {
      club: "Arsenal",
      img: "/images/arsenal.jpg",
      gp: 38,
      w: 29,
      d: 29,
      l: 6,
      f: 99,
      a: 26,
      gd: 73,
      pts: 99,
    },
    {
      club: "Manchester United",
      img: "/images/manu.jpg",
      gp: 38,
      w: 29,
      d: 29,
      l: 6,
      f: 99,
      a: 26,
      gd: 73,
      pts: 99,
    },
  ];
  const headers = ["GP", "W", "D", "L", "F", "A", "GD", "Pts"];

  const matches = [
    { date: new Date(2024, 8, 15), teamLogo: "/images/manu.jpg" }, // September is month 8 (0-based index)
    { date: new Date(2024, 8, 20), teamLogo: "/images/arsenal.jpg" },
    // Add more matches as needed
  ];

  const tileContent = ({ date, view }: { date: any; view: any }) => {
    if (view === "month") {
      const match = matches.find(
        (match) =>
          match.date.getDate() === date.getDate() &&
          match.date.getMonth() === date.getMonth() &&
          match.date.getFullYear() === date.getFullYear()
      );

      if (match) {
        return <Image src={match.teamLogo} alt="Team" height={20} width={20} />;
      } else {
        return <span>{date.getDate()}</span>;
      }
    }
    return null;
  };

  return (
    <section className="mx-auto">
      <div
        className="relative w-full bg-cover bg-center py-8 px-2"
        style={{
          backgroundImage: "url('/images/match-1.jpg')",
        }}
      >
        {/* Blur effect on background  img*/}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-row items-center justify-center gap-5 w-full md:h-72 h-80 container mx-auto px-2 sm:p-0 ">
          {/* calendar */}
          <div className="sm:hidden sm:w-1/4 md:block lg:block w-full h-full rounded-lg p-4 shadow-lg bg-white">
            <Calendar
                locale="en-GB"
              className={"calendar"}
              tileClassName={"calendar-day"}
              tileContent={tileContent}
            />
          </div>

          {/* matches table */}
          <div className="hidden md:block w-1/2 h-full rounded-lg p-4 shadow-lg bg-white">
            <table className="w-full divide-y-0 text-sm">
              <thead className="font-medium text-black-50">
                <tr>
                  <th className="p-1 text-left text-black ">Club</th>
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="p-1 text-left text-black-50 uppercase"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex % 2 === 0 ? "bg-gray rounded-lg " : "bg-white"
                    }`}
                  >
                    <td className="p-1.5 font-medium text-black flex flex-row gap-1 items-center">
                      {rowIndex + 1}
                      <Image
                        src={row.img}
                        alt="banner"
                        width={24}
                        height={24}
                        style={{ borderRadius: "12px", objectFit: "cover" }}
                      />
                      <span> {row.club}</span>
                    </td>
                    <td className="p-1.5">{row.gp}</td>
                    <td className="p-1.5">{row.w}</td>
                    <td className="p-1.5">{row.d}</td>
                    <td className="p-1.5">{row.l}</td>
                    <td className="p-1.5">{row.f}</td>
                    <td className="p-1.5">{row.a}</td>
                    <td className="p-1.5">{row.gd}</td>
                    <td className="p-1.5">{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* upcoming match*/}
          <div className="sm:flex sm:w-3/4 hidden md:w-1/4 h-full rounded-lg p-4 shadow-lg bg-white flex-col justify-center">
            <div className="flex flex-row justify-center mb-5">
              <Image
                src={"/images/match-2.jpg"}
                alt="banner"
                width={90}
                height={90}
                style={{ objectFit: "contain" }}
              />

              <div className="font-medium capitalize text-black text-center flex flex-col justify-between items-center">
                <span>The final round</span>
                <span className="text-brand text-xl font-bold">VS</span>
                <span>sunday , august 8th</span>
              </div>

              <Image
                src={"/images/match-3.jpg"}
                alt="banner"
                width={90}
                height={90}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-row justify-center items-center text-sm">
              <div
                className="w-1/3 p-1 h-8 flex flex-row justify-center items-center rounded-l-lg text-white font-medium"
                style={{
                  backgroundColor: "rgba(47, 92, 159, 1)",
                }}
              >
                <span className="truncate">Manchester</span>
              </div>
              <div className="w-1/3 h-12 border-x border-white flex flex-row items-center">
                <div className="p-1 w-full h-full bg-black text-md flex flex-row justify-center items-center rounded-l-lg text-white font-medium">
                  00
                </div>
                <div className="p-1 w-full h-full border-x border-white bg-black text-md flex flex-row justify-center items-center rounded-r-lg text-white font-medium">
                  00
                </div>
              </div>
              <div
                className="w-1/3 p-1 h-8 flex flex-row justify-center items-center rounded-r-lg text-white font-medium"
                style={{
                  backgroundColor: "rgba(170, 48, 52, 1)",
                }}
              >
                <span className="truncate"> Liverpool</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;
