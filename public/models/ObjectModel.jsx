import React from "react";
import { useGLTF } from "@react-three/drei";

export function ObjectModel() {
  const { scene } = useGLTF("/models/japanese_bridge_garden.glb");
  scene.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      // console.log(child);
      // child.scale.set(0.002, 0.002, 0.002);
    }
  });

  return <primitive object={scene} />;
}

useGLTF.preload("/models/japanese_bridge_garden.glb");
