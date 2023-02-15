import React, { useLayoutEffect, useRef } from "react";
import { Sky, Stars } from "@react-three/drei";
import gsap from "gsap";
import { useControls } from "leva";
import { useWeatherContext } from "../../context/WeatherProvider";

/* TODO: modifications on daytime (sunPosition)
dawn - y: 1, z: 7
noon - y: 1, z: 0
dusk - y: 1, z: -7
hour before night - y: 0, z: -7
raining: - y: -1: z: 7
*/

function Environment() {
  const skyRef = useRef(null);
  const { state } = useWeatherContext() || "daytime";

  // day
  // const tweakableComponents = useControls({
  //   sunPosition: [0, 1, 5],
  //   azimuth: 0.25,
  //   inclination: 0,
  //   distance: 100,
  // });

  // night
  // const tweakableComponents = useControls({
  //   radius: 100,
  //   depth: 50,
  //   count: 5000,
  //   factor: 4,
  //   saturation: 0,
  //   fade: true,
  //   speed: 1,
  // });

  // useLayoutEffect(() => {
  //   if (skyRef.current) {
  //     const sky = skyRef.current.__r3f.memoizedProps;

  //     // console.log(
  //     //   skyRef.current.__r3f.memoizedProps[
  //     //     "material-uniforms-sunPosition-value"
  //     //   ]
  //     // );

  //     // animation
  //     let ctx = gsap.context(() => {
  //       // duration will be of total duration * 2 + duration - due to the delay of sun going up and down
  //       const duration = 2.5; // time remaining before midnight here :: must be relative to realtime
  //       const timeline = gsap.timeline();
  //       // changes sunlight y axis
  //       timeline.to(sky["material-uniforms-sunPosition-value"], {
  //         duration: duration * 2,
  //         2: -7,
  //       });

  //       // bring sun down
  //       timeline.to(
  //         sky["material-uniforms-sunPosition-value"],
  //         {
  //           duration: duration,
  //           1: 0,
  //         },
  //         `+=0`
  //       );
  //     });

  //     // animation cleanup
  //     return () => ctx.revert();
  //   }
  // }, []);

  return (
    <>
      {state === "nighttime" ? (
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
          // {...tweakableComponents}
        />
      ) : (
        <Sky
          ref={skyRef}
          sunPosition={[0, 1, 7]}
          azimuth={0.25}
          inclination={0}
          distance={100}
          // {...tweakableComponents}
        />
      )}
    </>
  );
}

export default Environment;
