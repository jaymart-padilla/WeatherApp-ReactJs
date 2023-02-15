import { OrbitControls as OrbCtrl } from "@react-three/drei";
// import { degToRad } from "three/src/math/MathUtils";

const ORBIT_CONFIG = {
  target: [0, 2.45, 0],
  // minDistance: 4,
  // maxDistance: 9.75,
  // maxAzimuthAngle: degToRad(129),
  // minAzimuthAngle: degToRad(-45),
  // maxPolarAngle: degToRad(95),
};

export default function OrbitControls() {
  return <OrbCtrl {...ORBIT_CONFIG} autoRotate />;
}
