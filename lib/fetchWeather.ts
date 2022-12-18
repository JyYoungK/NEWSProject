const makeIconURL = (icon: string) => {
  if (icon === "01d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg";
  if (icon === "01n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg";
  if (icon === "02d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg";
  if (icon === "02n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night.svg";
  if (icon === "03d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg";
  if (icon === "03n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg";
  if (icon === "04d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg";
  if (icon === "04n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg";
  if (icon === "09d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-drizzle.svg";
  if (icon === "09n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg";
  if (icon === "10d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-rain.svg";
  if (icon === "10n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-rain.svg";
  if (icon === "11d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-day-rain.svg";
  if (icon === "11n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-night-rain.svg";
  if (icon === "13d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-snow.svg";
  if (icon === "13n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-snow.svg";
  if (icon === "50d")
    return "https://basmilius.github.io/weather-icons/production/fill/all/fog-day.svg";
  if (icon === "50n")
    return "https://basmilius.github.io/weather-icons/production/fill/all/fog-night.svg";
};
const getFormattedWeatherData = async (lat: Number, lon: Number) => {
  //   const URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=20&appid=${process.env.WEATHER_API_KEY}`;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&limit=20&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

  const weatherData = await fetch(weatherURL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = weatherData;
  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getFormattedWeatherData };
