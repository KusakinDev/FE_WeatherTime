"use client";

import React, { useEffect, useState } from 'react';
import WeatherCard from "@/components/weatherCard";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation'
import { weatherType } from "@/types/weatherType";

const WeatherPage = () => {
  const params = useParams()
  const cityName = typeof params.name === 'string' ? decodeURIComponent(params.name) : 'Новосибирск';

  const initData: weatherType = {
    cod: 0,
    name: cityName,
    timezone: 0,
    temp: 7,
    icon: " ",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgPage">
      <WeatherCard initData={initData} />
    </div>
  );
};

export default WeatherPage;
