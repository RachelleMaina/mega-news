"use client";

import React from "react";
import WeatherChart from "./WeatherChart";
import CityWeather from "./CityWeather";

const Weather = () => {
  return (
    <section className="bg-gray mx-auto py-8 px-2 sm:px-0">
      <div className="container mx-auto flex gap-5">
        <WeatherChart />
        <CityWeather />
      </div>
    </section>
  );
};

export default Weather;
