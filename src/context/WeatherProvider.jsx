import React, { useCallback, useContext, useEffect, useState } from "react";
// import data from "../../public/data";

const WeatherContext = React.createContext(null);
const WEATHER_API_BASE_URL = "https://api.weatherapi.com";

export function useWeatherContext() {
  return useContext(WeatherContext);
}

export function WeatherProvider({ children }) {
  const [latLon, setLatLon] = useState([]);
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);

  // get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatLon([pos.coords.latitude, pos.coords.longitude].join(","));
        },
        (err) => {
          return <pre>{`ERROR(${err.code}): ${err.message}`}</pre>;
        },
        { enableHighAccuracy: true }
      );
    } else {
      // return <pre>Geolocation is not supported by this browser</pre>;
      setLatLon("Philippines");
    }
  }, []);

  const getWeatherData = useCallback(async () => {
    const weather_api = new URL("/v1/forecast.json", WEATHER_API_BASE_URL);
    weather_api.searchParams.set("key", import.meta.env.VITE_WEATHER_API_KEY);
    weather_api.searchParams.set("q", latLon);
    weather_api.searchParams.set("days", 1);
    weather_api.searchParams.set("alerts", "yes");

    try {
      const data = await fetch(weather_api.href);
      const weather = await data.json();
      setLoading(false);
      setWeatherData(weather);
    } catch (err) {
      return <pre>{`ERROR: ${err}`}</pre>;
    }
  }, [latLon]);

  useEffect(() => {
    if (latLon.length) {
      getWeatherData();
    }
  }, [latLon, getWeatherData]);

  if (loading) {
    return <pre>Loading...</pre>;
  }

  // 05:00 - daytime
  // 19:00 - nighttime
  const localHour = new Date(weatherData.location.localtime).getHours();
  const state = localHour >= 5 && localHour < 19 ? "daytime" : "nighttime";
  return (
    <WeatherContext.Provider value={{ ...weatherData, state }}>
      {children}
    </WeatherContext.Provider>
  );
}
