"use client";

import React, { useState, useEffect } from "react";
import { weatherType } from "@/types/weatherType";
import { FaSearch, FaTrash, FaSign, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const WeatherCard: React.FC<weatherType> = ({ time, temp, image }) => {
  const [city, setCity] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    console.log("Ищем погоду для города:", city);
  };

  const handleClear = () => {
    setCity("");
  };

  useEffect(() => {
    const updateTime = () => {

      const now = new Date();
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const utcSeconds = now.getUTCSeconds();


      const adjustedTime = new Date();
      adjustedTime.setUTCHours(utcHours + time);
      adjustedTime.setUTCMinutes(utcMinutes);
      adjustedTime.setUTCSeconds(utcSeconds);

      // Форматируем время для отображения
      setCurrentTime(adjustedTime.toLocaleTimeString("en-GB", { timeZone: "UTC" }));
    };

    updateTime(); // Обновляем сразу
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  

  return (
    <div className="w-full max-w-lg h-auto mx-auto bg-bgComp shadow-md rounded-xl p-4">
      <div className="mb-4">
        <label htmlFor="city" className="block text-m text-center font-bold text-txComp">
          Узнать погоду в городе
        </label>
        <div className="relative mt-4">
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleInputChange}
            placeholder="Введите название города..."
            className="bg-bgElem w-full h-10 rounded-md shadow-sm  sm:text-m text-txElemActive pl-3 focus:outline-none focus:border-bgElemActive focus:ring-2 focus:ring-bgElemActive"
          />
          <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2">
            <button
              onClick={handleSearch}
              className="p-1 text-txElem hover:text-txElemActive focus:outline-none"
            >
              <FaSearch size={15} />
            </button>
            <button
              onClick={handleClear}
              className="p-1 text-txElem hover:text-txElemActive focus:outline-none"
            >
              <FaTrash size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-5xl font-bold text-txComp">{currentTime}</div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <div className="flex flex-col items-center pt-2 bg-bgElem rounded-md shadow text-txElem">
          <img src={image} alt="Weather icon" className="w-55 h-55" />
        </div>
        <div className="flex flex-col items-center pt-8 pl-4 pr-4 bg-bgElem rounded-md shadow text-txElem">
          <div className="text-4xl font-semibold">{temp}°C</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
