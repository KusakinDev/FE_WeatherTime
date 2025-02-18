"use client";

import WeatherCard from "@/components/weatherCard";
import { weatherType } from "@/types/weatherType";

export default function Home() {

  const initData: weatherType = {
      cod: 0,
      name: " ",
      timezone: 0,
      temp: 7,
      icon: " ",
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgPage">
      <WeatherCard initData={initData}/>
    </div>
  );
}
