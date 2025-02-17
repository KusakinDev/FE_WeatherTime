"use client";

import WeatherCard from "@/components/weatherCard";
import { weatherType } from "@/types/weatherType";

export default function Home() {
  const data: weatherType = {
    id: 0,
    name: "Nov",
    time: 7,
    temp: -7,
    image: "https://openweathermap.org/img/wn/10d@2x.png",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgPage">
      <WeatherCard {...data} />
    </div>
  );
}
