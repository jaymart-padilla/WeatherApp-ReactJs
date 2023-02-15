import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useControls } from "leva";
import { useWeatherContext } from "../../context/WeatherProvider";

function Lights() {
  const directionalLightRef = useRef(null);
  const { state } = useWeatherContext() || "daytime";

  // const tweakableComponents = useControls({
  //   position: [0, -7, 70],
  //   // position: [0, 7, -70],
  // });

  useLayoutEffect(() => {
    if (directionalLightRef.current) {
      const dirLight = directionalLightRef.current;

      // animation
      let ctx = gsap.context(() => {
        // duration will be of total duration * 2 + duration - due to the delay of sun going up and down
        const duration = 7; // time remaining before midnight here :: must be relative to realtime
        const timeline = gsap.timeline();
        // changes sunlight y axis
        timeline.to(dirLight.position, {
          duration: duration * 2,
          y: 7,
        });

        // before the previous animation + `duration`s || change sunlight parellel direction
        timeline.to(
          dirLight.position,
          {
            duration: duration,
            z: -70,
          },
          `-=${duration}`
        );

        // after the previous animation + 0s || puts the sun down
        timeline.to(
          dirLight.position,
          {
            duration: duration,
            y: -7,
          },
          `+=0`
        );
      });

      // animation cleanup
      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      {/* globally illuminates all objects in the scene equally */}
      <ambientLight args={["#ffffff", 0.025]} />

      {state === "nighttime" ? (
        <LanternLights />
      ) : (
        // sunlight
        <directionalLight
          ref={directionalLightRef}
          args={["#fdfbd3", 0.85]}
          // {...tweakableComponents}
          // position={[0, 1, 0]}
          position={[0, -7, 70]}
          castShadow
        />
      )}
    </>
  );
}

function LanternLights() {
  return (
    <>
      <pointLight args={["white", 2.5, 6]} position={[2, 6, -2]} />
      <pointLight args={["white", 1, 3]} position={[0.1, 2, 2.2]} />
      <pointLight args={["white", 1, 3]} position={[-2.3, 2, 1.6]} />
      <pointLight args={["white", 1, 5]} position={[-1.5, 4, -0.8]} />
      <pointLight args={["white", 10, 5]} position={[0, 10, 0.4]} />
      <pointLight args={["white", 10, 6]} position={[-2, 9, 1]} />
    </>
  );
}

export default Lights;
