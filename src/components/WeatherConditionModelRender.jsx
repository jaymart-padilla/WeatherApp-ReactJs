import React from "react";
import { Cloud } from "../../public/models/Cloud";
import { Rain } from "../../public/models/Rain";
import { useWeatherContext } from "../context/WeatherProvider";

export default function WeatherConditionModelRender() {
  let {
    current: {
      condition: { text },
    },
  } = useWeatherContext() || "";

  text = text.toLowerCase();

  return text.includes("cloud") || text.includes("overcast") ? (
    <Cloud />
  ) : text.includes("rain") ? (
    <Rain />
  ) : null;
}
