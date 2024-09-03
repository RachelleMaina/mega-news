"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";


const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const WeatherChart = () => {
  const [dayIndex, setDayIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const weatherData = [
    {
      day: "Mon",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [16, 18, 20, 22, 21, 19],
      img: "/images/weather.png",
      min: "20",
      max: "29",
    },
    {
      day: "Tue",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [15, 17, 19, 21, 20, 18],
      img: "/images/weather-1.png",
      min: "20",
      max: "29",
    },
    {
      day: "Wed",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [14, 16, 18, 20, 19, 17],
      img: "/images/weather-2.png",
      min: "20",
      max: "29",
    },
    {
      day: "Thur",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [15, 17, 19, 21, 20, 18],
      img: "/images/weather-3.png",
      min: "20",
      max: "29",
    },
    {
      day: "Fri",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [14, 16, 18, 20, 19, 17],
      img: "/images/weather-4.png",
      min: "20",
      max: "29",
    },
    {
      day: "Sat",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [15, 17, 19, 21, 20, 18],
      img: "/images/weather-5.png",
      min: "20",
      max: "29",
    },
    {
      day: "Sun",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [14, 16, 18, 20, 19, 17],
      img: "/images/weather-1.png",
      min: "20",
      max: "29",
    },
    {
      day: "Mon",
      time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
      temperature: [15, 17, 19, 21, 20, 18],
      img: "/images/weather-2.png",
      min: "20",
      max: "29",
    },
  ];

  // Extract the data for the current day
  const currentDay = weatherData[dayIndex];

  // Prepare the data for the area chart
  const chartData = {
    series: [
      {
        name: "Temperature (°C)",
        data: currentDay.temperature,
      },
    ],
    options: {
      chart: {
        type: "area" as "area",
        toolbar: { show: false },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(252, 197, 76, 0.5)", // New area color
              opacity: 0.1,
            },
            {
              offset: 100,
              color: "rgba(252, 197, 76, 0)", // Lighter variant at the bottom
              opacity: 0,
            },
          ],
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
          colors: ["rgba(62, 50, 50, 0.75)"], // Label color
          fontWeight: "bold",
        },
        background: {
          enabled: false, // Remove label background
        },
        formatter: (val: any) => `${val}`,
      },
      stroke: {
        curve: "smooth" as "smooth",
        colors: ["#FFC300"], // Line color
        width: 2,
      },
      xaxis: {
        categories: currentDay.time,
        labels: {
          show: false, // Hide x-axis markers
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false, // Remove ticks
        },
      },
      yaxis: {
        show: false, // Hide y-axis
      },
      grid: {
        show: false, // Remove gridlines
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  };

  return (
    <div className="lg:block md:hidden sm:hidden hidden bg-white w-1/2 rounded-lg p-4">
      <div className="flex flew-row justify-between items-center">
        <div className="flex flew-row gap-4 justify-between items-center">
          <Image
            src={"/images/weather.png"}
            alt="weather"
            width={58}
            height={58}
          />
          <span className="text-4xl text-black">
            29<sup>°C</sup>
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-black-75">Precipitation: 2%</span>
            <span className="text-xs text-black-75">Humidity: 70%</span>
            <span className="text-xs text-black-75">Wind: 3 km/h</span>
          </div>
        </div>
        <div className="flex flew-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xl text-black">New York, NY</span>
            <span className="text-black text-sm">Wednesday 04:00</span>
          </div>
        </div>
      </div>

      {/* Apex Area Chart */}
      <div className="chart-container w-full h-64">
        {typeof window !== "undefined" && (
          <ApexCharts
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
          />
        )}
      </div>

      {/* List of Days for Navigation */}
      <div className="flex justify-center gap-1 mt-6">
        {weatherData.map((day, index) => (
          <div
            className={`w-14 flex flex-col gap-1 justify-center p-1 rounded-lg ${
              dayIndex === index ? "bg-gray" : "bg-white"
            }`}
            key={index}
            onClick={() => setDayIndex(index)}
          >
            <span className="font-medium text-black text-center">
              {day.day}
            </span>
            <div className="flex justify-center">
              <Image src={day.img} alt="weather" width={36} height={36} />
            </div>

            <div className="flex flex-row justify-between">
              <span className="text-sm text-black">
                {day.max}
                <sup>°</sup>
              </span>
              <span className="text-sm text-black-50">
                {day.min}
                <sup>°</sup>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherChart;
