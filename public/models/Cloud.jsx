import { useGLTF } from "@react-three/drei";
import { useWeatherContext } from "../../src/context/WeatherProvider";

export function Cloud() {
  const { nodes, materials } = useGLTF("/models/cloud-transformed.glb");
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloud_0.geometry}
          material={materials.CloudMaterial}
          scale={0.86}
          position={[-10, 20, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloud_0.geometry}
          material={materials.CloudMaterial}
          scale={0.86}
          position={[0, 40, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloud_0.geometry}
          material={materials.CloudMaterial}
          scale={0.86}
          position={[10, 40, 11]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/cloud-transformed.glb");
