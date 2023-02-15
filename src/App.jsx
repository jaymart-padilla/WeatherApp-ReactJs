import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Three from "./components";
import HeaderContent from "./components/HeaderContent";
import { WeatherProvider } from "./context/WeatherProvider";
import Spinner from "./components/Spinner";

function App() {
  return (
    <WeatherProvider>
      <Canvas shadows id="canvas-container">
        <Suspense fallback={<Spinner />}>
          <Three />
        </Suspense>
      </Canvas>
      <HeaderContent />
    </WeatherProvider>
  );
}

export default App;
