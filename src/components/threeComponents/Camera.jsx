import { PerspectiveCamera as PerspectiveCam } from "@react-three/drei";

const PERSPECTIVE_CAMERA_CONFIG = {
  makeDefault: true,
  position: [7.97, 2.73, 4.56],
  args: [34],
};

export default function PerspectiveCamera() {
  return <PerspectiveCam {...PERSPECTIVE_CAMERA_CONFIG} />;
}
