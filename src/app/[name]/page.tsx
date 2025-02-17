"use client";

import React, { useEffect, useState } from 'react';
import WeatherCard from "@/components/weatherCard";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation'

const WeatherPage = () => {
  const params = useParams()
  const cityName = typeof params.name === 'string' ? decodeURIComponent(params.name) : 'Новосибирск';

  const data = {
    id: 0,
    name: cityName,  // Используем значение из URL или дефолтное
    time: 7,
    temp: -7,
    image: "https://openweathermap.org/img/wn/10d@2x.png", // Замените на URL вашей иконки
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgPage">
      <WeatherCard {...data} />
    </div>
  );
};

export default WeatherPage;
