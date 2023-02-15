import React from "react";
import PerspectiveCamera from "./threeComponents/Camera";
import OrbitControls from "./threeComponents/OrbitContols";
import Lights from "./threeComponents/Lights";
import { ObjectModel } from "../../public/models/ObjectModel";
import Environment from "./threeComponents/Environment";
import WeatherConditionModelRender from "./WeatherConditionModelRender";

function Three() {
  return (
    <>
      <PerspectiveCamera />
      <OrbitControls />

      <Lights />
      <ObjectModel />
      <WeatherConditionModelRender />
      <Environment />
    </>
  );
}

export default Three;
