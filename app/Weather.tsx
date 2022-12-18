"use client";
import { useState, useEffect } from "react";
import { getFormattedWeatherData } from "../lib/fetchWeather";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import ThermostatIcon from "@mui/icons-material/Thermostat";

type WeatherData = {
  description: any;
  temp: any;
  iconURL: any;
  feels_like: any;
  temp_min: any;
  temp_max: any;
  pressure: any;
  humidity: any;
  speed: any;
  country: any;
  name: any;
};

function Weather() {
  const [celcius, setCelcius] = useState(true);
  const [weather, setWeather] = useState<WeatherData>();

  useEffect(() => {
    // const fetchWeather = async () => {

    const fetchWeatherData = async () => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const data: WeatherData = await getFormattedWeatherData(
          position.coords.latitude,
          position.coords.longitude
        );
        setWeather(data);
      });
    };

    fetchWeatherData();
  }, []);

  const handleUnitsClick = () => {
    setCelcius(!celcius);
  };

  let weatherDescription = weather?.description
    .split(" ")
    .map((word: string) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return (
    <div className="font-sans text-base dark:text-[#3A160E] md:text-base">
      {weather && (
        <div className="h-30 flex flex-col md:flex-row">
          <div className="h-full align-middle">
            <img
              className="w-20 grayscale dark:grayscale-0 md:w-28"
              src={weather.iconURL}
              alt="weatherIcon"
            />
            <div className="hidden sm:block lg:text-xl ">
              {weatherDescription ?? weatherDescription}
            </div>
          </div>
          <div className="my-auto align-middle text-lg lg:text-3xl">
            <div className="md:mt-6 lg:ml-2">
              <div className="text-base underline lg:text-xl">{`${weather.name}, ${weather.country}`}</div>
              <div className="hover:cursor-pointer" onClick={handleUnitsClick}>
                <ThermostatIcon className="mb-1" />

                {`${
                  celcius === true
                    ? (weather.temp - 273.15).toFixed(2) + "°C"
                    : (((weather.temp - 273.15) * 9) / 5 + 32).toFixed(2) + "°F"
                }
                `}
              </div>
              <div className="hidden flex-row gap-1 hover:cursor-pointer sm:block md:text-base">
                <div onClick={handleUnitsClick}>
                  <NorthIcon className="animate-bounce md:mb-1 md:text-sm" />
                  {`${
                    celcius === true
                      ? (weather.temp_max - 273.15).toFixed(2) + "°C"
                      : (((weather.temp_max - 273.15) * 9) / 5 + 32).toFixed(
                          2
                        ) + "°F"
                  }
                `}
                </div>
                <div onClick={handleUnitsClick}>
                  <SouthIcon className="south-bounce md:mt-2 md:text-sm" />
                  {`${
                    celcius === true
                      ? (weather.temp_min - 273.15).toFixed(2) + "°C"
                      : (((weather.temp_min - 273.15) * 9) / 5 + 32).toFixed(
                          2
                        ) + "°F"
                  }
                `}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
