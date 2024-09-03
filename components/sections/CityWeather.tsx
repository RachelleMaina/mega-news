"use client";
import Image from "next/image";

const CityWeather = () => {
  const cityWeather = [
    {
      id: 1,
      bgImg: "/images/ankara.jpg",
      weather: "/images/weather-white.png",
      temp: "32",
      time: "Tuesday 2:00 PM",
      city: "Ankara",
      precipitation: "0%",
      humidity: "41%",
      wind: "27Km/H",
      linearGradient:
        "linear-gradient(154.1deg, rgba(251, 68, 28, 0.91) 0%, rgba(251, 202, 28, 0.6) 99%)",
    },

    {
      id: 2,
      bgImg: "/images/alaska.jpg",
      weather: "/images/weather-2-white.png",
      temp: "16",
      time: "Tuesday 2:00 PM",
      city: "Ankara",
      precipitation: "0%",
      humidity: "41%",
      wind: "27Km/H",
      linearGradient:
        "linear-gradient(154.1deg, rgba(28, 50, 251, 0.91) 0%, rgba(28, 251, 224, 0.6) 99%)",
    },

    {
      id: 3,
      bgImg: "/images/berlin.jpg",
      weather: "/images/weather-3-white.png",
      temp: "24",
      time: "Tuesday 2:00 PM",
      city: "Ankara",
      precipitation: "0%",
      humidity: "41%",
      wind: "27Km/H",
      linearGradient:
        "linear-gradient(154.1deg, rgba(7, 156, 39, 0.91) 0%, rgba(192, 255, 113, 0.6) 99%)",
    },
    {
      id: 4,
      bgImg: "/images/paris.jpg",
      weather: "/images/weather-1-white.png",
      temp: "27",
      time: "Tuesday 2:00 PM",
      city: "Ankara",
      precipitation: "0%",
      humidity: "41%",
      wind: "27Km/H",
      overlay: "",
      linearGradient:
        "linear-gradient(154.1deg, rgba(113, 28, 251, 0.91) 0%, rgba(251, 28, 148, 0.6) 99%)",
    },
  ];

  return (
    <>
      <div className="md:grid hidden grid-cols-2 gap-5 w-1/2">
        {cityWeather.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${item.bgImg})` }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 opacity-95 rounded-lg"
              style={{ backgroundImage: item.linearGradient }}
            ></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-3 text-white">
              <div className="flex flex-row justify-between items-center gap-1">
                <div className="flex flex-col gap-1">
                  <span className="text-xs">
                    Precipitation:{item.precipitation}
                  </span>
                  <span className="text-xs">Humidity: {item.humidity}</span>
                  <span className="text-xs">Wind: {item.wind}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xl">{item.city}</span>
                  <span className="text-sm">{item.time}</span>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center">
                <div className="flex flex-row justify-between items-center gap-2">
                  <Image
                    src={item.weather}
                    alt="weather"
                    width={58}
                    height={58}
                  />
                  <span className="text-4xl">
                    {item.temp} <sup>°C</sup>
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      {/* small devices */}
      <div className="md:hidden w-full h-56">
        <div
          key={cityWeather[0].id}
          className="relative w-full h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${cityWeather[0].bgImg})` }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 opacity-95 rounded-lg"
            style={{ backgroundImage: cityWeather[0].linearGradient }}
          ></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
            <div className="flex flex-row justify-between items-center gap-1">
              <div className="flex flex-col gap-1">
                <span className="text-xs">
                  Precipitation:{cityWeather[0].precipitation}
                </span>
                <span className="text-xs">
                  Humidity: {cityWeather[0].humidity}
                </span>
                <span className="text-xs">Wind: {cityWeather[0].wind}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xl">{cityWeather[0].city}</span>
                <span className="text-sm">{cityWeather[0].time}</span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-row justify-between items-center gap-2">
                <Image
                  src={cityWeather[0].weather}
                  alt="weather"
                  width={58}
                  height={58}
                />
                <span className="text-4xl">
                  {cityWeather[0].temp} <sup>°C</sup>
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityWeather;
