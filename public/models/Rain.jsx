import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rain(props) {
  const group = useRef();
  const SCALE = 0.02;
  const { nodes, materials } = useGLTF("/models/rain-transformed.glb");
  return (
    <group {...props} ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="f474fbeb21fc4dfb92e515beabfd19befbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2" scale={SCALE} position={[-30, -2, -53]}>
              <group name="RootNode">
                <group name="rain" rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
                  <group
                    name="Plane001"
                    position={[-41.64, -29.68, 189.94]}
                    scale={0.55}
                  >
                    <group name="Object_6" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane001_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane001_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane002"
                    position={[-3.74, 3.48, 151.18]}
                    scale={0.87}
                  >
                    <group name="Object_9" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane002_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane002_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane003"
                    position={[26.07, -22.58, 189.94]}
                    scale={0.55}
                  >
                    <group name="Object_12" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane003_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane003_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane004"
                    position={[52.08, 3.24, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_15" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane004_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane004_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane005"
                    position={[21.97, 15.29, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_18" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane005_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane005_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane006"
                    position={[53.9, 38.92, 189.94]}
                    scale={0.55}
                  >
                    <group name="Object_21" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane006_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane006_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane007"
                    position={[-45.33, 25.83, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_24" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane007_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane007_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane008"
                    position={[-88.61, 43.06, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_27" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane008_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane008_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane009"
                    position={[-29.14, -73.94, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_30" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane009_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane009_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane010"
                    position={[60.82, -80.96, 117.47]}
                    scale={1.02}
                  >
                    <group name="Object_33" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane010_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane010_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group name="cloud_101" position={[-51.83, 68.15, 235.5]}>
                    <mesh
                      name="cloud_101_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_101_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group
                    name="cloud_102"
                    position={[-53.05, -53.17, 235.5]}
                    rotation={[0.62, -0.14, 0.1]}
                  >
                    <mesh
                      name="cloud_102_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_102_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group name="cloud_104" position={[18.95, 6.74, 235.5]}>
                    <mesh
                      name="cloud_104_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_104_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group name="cloud_103" position={[48.49, -55.93, 222.57]}>
                    <mesh
                      name="cloud_103_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_103_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group
                    name="lightning1"
                    position={[-22.63, 0, 216.9]}
                    scale={0.01}
                  >
                    <mesh
                      name="lightning1_11_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["lightning1_11_-_Default_0"].geometry}
                      material={materials["11_-_Default"]}
                    />
                  </group>
                  <group
                    name="lightning2"
                    position={[29.34, 0, 219.17]}
                    scale={0.01}
                  >
                    <mesh
                      name="lightning2_11_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["lightning2_11_-_Default_0"].geometry}
                      material={materials["11_-_Default"]}
                    />
                  </group>
                  <group
                    name="Plane011"
                    position={[-72.9, 6.64, 172.34]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_48" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane011_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane011_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane012"
                    position={[-22.65, 3.29, 133.58]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.87}
                  >
                    <group name="Object_51" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane012_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane012_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane013"
                    position={[-19.99, -36.22, 172.34]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_54" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane013_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane013_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane014"
                    position={[16.65, -36.35, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_57" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane014_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane014_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane015"
                    position={[3.88, -6.54, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_60" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane015_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane015_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane016"
                    position={[43.16, -12.41, 172.34]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_63" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane016_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane016_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane017"
                    position={[-36.25, 48.5, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_66" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane017_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane017_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane018"
                    position={[-54.68, 91.29, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_69" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane018_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane018_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane019"
                    position={[-95.35, -33.5, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_72" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane019_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane019_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane020"
                    position={[-36.7, -102.07, 99.87]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={1.02}
                  >
                    <group name="Object_75" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane020_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane020_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane021"
                    position={[14.21, -49.56, 216.69]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_78" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane021_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane021_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane022"
                    position={[17.56, 0.68, 177.93]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.87}
                  >
                    <group name="Object_81" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane022_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane022_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane023"
                    position={[57.06, 3.34, 216.69]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_84" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane023_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane023_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane024"
                    position={[57.2, 39.98, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_87" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane024_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane024_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane025"
                    position={[27.39, 27.21, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_90" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane025_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane025_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane026"
                    position={[33.25, 66.5, 216.69]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_93" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane026_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane026_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane027"
                    position={[-27.65, -12.92, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_96" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane027_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane027_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane028"
                    position={[-70.44, -31.34, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_99" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane028_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane028_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane029"
                    position={[54.34, -72.02, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_102" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane029_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane029_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane030"
                    position={[119.99, -16.3, 178]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.87}
                  >
                    <group name="Object_105" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane030_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane030_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane031"
                    position={[29.92, 38.1, 198.47]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.23}
                  >
                    <group name="Object_108" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane031_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane031_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane032"
                    position={[-7.98, 4.94, 168.93]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.55}
                  >
                    <group name="Object_111" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane032_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane032_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane033"
                    position={[-37.8, 30.99, 198.47]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.23}
                  >
                    <group name="Object_114" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane033_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane033_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane034"
                    position={[-63.8, 5.18, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_117" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane034_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane034_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane035"
                    position={[-33.69, -6.87, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_120" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane035_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane035_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane036"
                    position={[-65.62, -30.5, 198.47]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.23}
                  >
                    <group name="Object_123" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane036_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane036_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane037"
                    position={[33.61, -17.42, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_126" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane037_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane037_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane038"
                    position={[76.89, -34.64, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_129" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane038_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane038_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane039"
                    position={[17.42, 82.36, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_132" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane039_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane039_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane040"
                    position={[-72.54, 89.37, 130.17]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.87}
                  >
                    <group name="Object_135" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane040_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane040_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane041"
                    position={[-55.85, 28.43, 194.3]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.55}
                  >
                    <group name="Object_138" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane041_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane041_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane042"
                    position={[-22.69, -9.46, 155.54]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.87}
                  >
                    <group name="Object_141" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane042_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane042_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane043"
                    position={[-48.74, -39.28, 194.3]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.55}
                  >
                    <group name="Object_144" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane043_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane043_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane044"
                    position={[-22.93, -65.29, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_147" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane044_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane044_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane045"
                    position={[-10.88, -35.18, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_150" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane045_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane045_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane046"
                    position={[12.75, -67.1, 194.3]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.55}
                  >
                    <group name="Object_153" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane046_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane046_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane047"
                    position={[-0.34, 32.12, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_156" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane047_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane047_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane048"
                    position={[16.89, 75.41, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_159" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane048_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane048_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane049"
                    position={[-100.11, 15.93, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_162" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane049_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane049_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane050"
                    position={[-107.13, -69.89, 155.62]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.87}
                  >
                    <group name="Object_165" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane050_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane050_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane051"
                    position={[64.88, 5.03, 176.09]}
                    rotation={[0, 0, -2.97]}
                    scale={0.23}
                  >
                    <group name="Object_168" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane051_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane051_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane052"
                    position={[33.31, -34.21, 146.54]}
                    rotation={[0, 0, -2.97]}
                    scale={0.55}
                  >
                    <group name="Object_171" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane052_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane052_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane053"
                    position={[-0.58, -13.72, 176.09]}
                    rotation={[0, 0, -2.97]}
                    scale={0.23}
                  >
                    <group name="Object_174" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane053_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane053_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane054"
                    position={[-21.71, -43.66, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_177" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane054_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane054_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane055"
                    position={[10.04, -50.3, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_180" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane055_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane055_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane056"
                    position={[-17.3, -79.12, 176.09]}
                    rotation={[0, 0, -2.97]}
                    scale={0.23}
                  >
                    <group name="Object_183" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane056_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane056_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane057"
                    position={[78.15, -49, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_186" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane057_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane057_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane058"
                    position={[123.77, -58.44, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_189" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane058_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane058_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane059"
                    position={[44.88, 46.45, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_192" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane059_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane059_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane060"
                    position={[-44.93, 37.74, 107.78]}
                    rotation={[0, 0, -2.97]}
                    scale={0.87}
                  >
                    <group name="Object_195" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane060_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane060_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane061"
                    position={[-22.61, 49.09, 172.34]}
                    rotation={[0, 0, -2.36]}
                    scale={0.55}
                  >
                    <group name="Object_198" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane061_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane061_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane062"
                    position={[-25.96, -1.15, 133.58]}
                    rotation={[0, 0, -2.36]}
                    scale={0.87}
                  >
                    <group name="Object_201" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane062_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane062_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane063"
                    position={[-65.47, -3.81, 172.34]}
                    rotation={[0, 0, -2.36]}
                    scale={0.55}
                  >
                    <group name="Object_204" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane063_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane063_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane064"
                    position={[-65.6, -40.45, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_207" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane064_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane064_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane065"
                    position={[-35.79, -27.68, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_210" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane065_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane065_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane066"
                    position={[-41.65, -66.97, 172.34]}
                    rotation={[0, 0, -2.36]}
                    scale={0.55}
                  >
                    <group name="Object_213" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane066_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane066_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane067"
                    position={[19.25, 12.45, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_216" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane067_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane067_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane068"
                    position={[62.04, 30.88, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_219" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane068_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane068_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane069"
                    position={[-62.75, 71.55, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_222" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane069_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane069_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane070"
                    position={[-131.32, 12.9, 99.87]}
                    rotation={[0, 0, -2.36]}
                    scale={1.02}
                  >
                    <group name="Object_225" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane070_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane070_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane071"
                    position={[71.05, -12.61, 172.34]}
                    rotation={[0, 0, 2.36]}
                    scale={0.55}
                  >
                    <group name="Object_228" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane071_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane071_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane072"
                    position={[20.8, -9.26, 133.58]}
                    rotation={[0, 0, 2.36]}
                    scale={0.87}
                  >
                    <group name="Object_231" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane072_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane072_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane073"
                    position={[18.15, 30.25, 172.34]}
                    rotation={[0, 0, 2.36]}
                    scale={0.55}
                  >
                    <group name="Object_234" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane073_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane073_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane074"
                    position={[-18.5, 30.39, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_237" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane074_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane074_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane075"
                    position={[-5.73, 0.57, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_240" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane075_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane075_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane076"
                    position={[-45.01, 6.44, 172.34]}
                    rotation={[0, 0, 2.36]}
                    scale={0.55}
                  >
                    <group name="Object_243" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane076_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane076_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane077"
                    position={[34.41, -54.47, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_246" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane077_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane077_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane078"
                    position={[52.83, -97.26, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_249" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane078_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane078_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane079"
                    position={[93.51, 27.53, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_252" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane079_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane079_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane080"
                    position={[34.86, 96.1, 99.87]}
                    rotation={[0, 0, 2.36]}
                    scale={1.02}
                  >
                    <group name="Object_255" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane080_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane080_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_2" scale={SCALE} position={[-12, -6, -5]}>
              <group name="RootNode">
                <group name="rain" rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
                  <group
                    name="Plane001"
                    position={[-41.64, -29.68, 189.94]}
                    scale={0.55}
                  >
                    <group name="Object_6" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane001_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane001_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane002"
                    position={[-3.74, 3.48, 151.18]}
                    scale={0.87}
                  >
                    <group name="Object_9" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane002_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane002_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane003"
                    position={[26.07, -22.58, 189.94]}
                    scale={0.55}
                  >
                    <group name="Object_12" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane003_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane003_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane004"
                    position={[52.08, 3.24, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_15" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane004_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane004_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane005"
                    position={[21.97, 15.29, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_18" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane005_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane005_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane006"
                    position={[53.9, 38.92, 189.94]}
                    scale={0.55}
                  >
                    <group name="Object_21" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane006_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane006_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane007"
                    position={[-45.33, 25.83, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_24" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane007_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane007_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane008"
                    position={[-88.61, 43.06, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_27" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane008_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane008_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane009"
                    position={[-29.14, -73.94, 227.46]}
                    scale={0.09}
                  >
                    <group name="Object_30" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane009_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane009_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane010"
                    position={[60.82, -80.96, 117.47]}
                    scale={1.02}
                  >
                    <group name="Object_33" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane010_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane010_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group name="cloud_101" position={[-51.83, 68.15, 235.5]}>
                    <mesh
                      name="cloud_101_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_101_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group
                    name="cloud_102"
                    position={[-53.05, -53.17, 235.5]}
                    rotation={[0.62, -0.14, 0.1]}
                  >
                    <mesh
                      name="cloud_102_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_102_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group name="cloud_104" position={[18.95, 6.74, 235.5]}>
                    <mesh
                      name="cloud_104_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_104_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group name="cloud_103" position={[48.49, -55.93, 222.57]}>
                    <mesh
                      name="cloud_103_Material_#0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["cloud_103_Material_#0_0"].geometry}
                      material={materials.Material_0}
                    />
                  </group>
                  <group
                    name="lightning1"
                    position={[-22.63, 0, 216.9]}
                    scale={0.01}
                  >
                    <mesh
                      name="lightning1_11_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["lightning1_11_-_Default_0"].geometry}
                      material={materials["11_-_Default"]}
                    />
                  </group>
                  <group
                    name="lightning2"
                    position={[29.34, 0, 219.17]}
                    scale={0.01}
                  >
                    <mesh
                      name="lightning2_11_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["lightning2_11_-_Default_0"].geometry}
                      material={materials["11_-_Default"]}
                    />
                  </group>
                  <group
                    name="Plane011"
                    position={[-72.9, 6.64, 172.34]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_48" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane011_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane011_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane012"
                    position={[-22.65, 3.29, 133.58]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.87}
                  >
                    <group name="Object_51" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane012_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane012_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane013"
                    position={[-19.99, -36.22, 172.34]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_54" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane013_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane013_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane014"
                    position={[16.65, -36.35, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_57" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane014_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane014_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane015"
                    position={[3.88, -6.54, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_60" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane015_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane015_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane016"
                    position={[43.16, -12.41, 172.34]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_63" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane016_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane016_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane017"
                    position={[-36.25, 48.5, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_66" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane017_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane017_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane018"
                    position={[-54.68, 91.29, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_69" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane018_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane018_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane019"
                    position={[-95.35, -33.5, 209.86]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_72" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane019_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane019_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane020"
                    position={[-36.7, -102.07, 99.87]}
                    rotation={[0, 0, -Math.PI / 4]}
                    scale={1.02}
                  >
                    <group name="Object_75" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane020_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane020_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane021"
                    position={[14.21, -49.56, 216.69]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_78" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane021_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane021_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane022"
                    position={[17.56, 0.68, 177.93]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.87}
                  >
                    <group name="Object_81" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane022_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane022_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane023"
                    position={[57.06, 3.34, 216.69]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_84" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane023_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane023_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane024"
                    position={[57.2, 39.98, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_87" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane024_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane024_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane025"
                    position={[27.39, 27.21, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_90" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane025_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane025_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane026"
                    position={[33.25, 66.5, 216.69]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.55}
                  >
                    <group name="Object_93" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane026_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane026_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane027"
                    position={[-27.65, -12.92, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_96" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane027_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane027_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane028"
                    position={[-70.44, -31.34, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_99" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane028_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane028_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane029"
                    position={[54.34, -72.02, 254.21]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.09}
                  >
                    <group name="Object_102" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane029_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane029_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane030"
                    position={[119.99, -16.3, 178]}
                    rotation={[0, 0, Math.PI / 4]}
                    scale={0.87}
                  >
                    <group name="Object_105" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane030_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane030_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane031"
                    position={[29.92, 38.1, 198.47]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.23}
                  >
                    <group name="Object_108" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane031_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane031_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane032"
                    position={[-7.98, 4.94, 168.93]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.55}
                  >
                    <group name="Object_111" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane032_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane032_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane033"
                    position={[-37.8, 30.99, 198.47]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.23}
                  >
                    <group name="Object_114" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane033_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane033_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane034"
                    position={[-63.8, 5.18, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_117" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane034_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane034_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane035"
                    position={[-33.69, -6.87, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_120" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane035_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane035_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane036"
                    position={[-65.62, -30.5, 198.47]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.23}
                  >
                    <group name="Object_123" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane036_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane036_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane037"
                    position={[33.61, -17.42, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_126" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane037_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane037_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane038"
                    position={[76.89, -34.64, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_129" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane038_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane038_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane039"
                    position={[17.42, 82.36, 96.46]}
                    rotation={[0, 0, -Math.PI]}
                    scale={1.02}
                  >
                    <group name="Object_132" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane039_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane039_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane040"
                    position={[-72.54, 89.37, 130.17]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.87}
                  >
                    <group name="Object_135" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane040_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane040_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane041"
                    position={[-55.85, 28.43, 194.3]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.55}
                  >
                    <group name="Object_138" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane041_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane041_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane042"
                    position={[-22.69, -9.46, 155.54]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.87}
                  >
                    <group name="Object_141" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane042_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane042_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane043"
                    position={[-48.74, -39.28, 194.3]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.55}
                  >
                    <group name="Object_144" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane043_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane043_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane044"
                    position={[-22.93, -65.29, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_147" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane044_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane044_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane045"
                    position={[-10.88, -35.18, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_150" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane045_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane045_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane046"
                    position={[12.75, -67.1, 194.3]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.55}
                  >
                    <group name="Object_153" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane046_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane046_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane047"
                    position={[-0.34, 32.12, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_156" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane047_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane047_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane048"
                    position={[16.89, 75.41, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_159" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane048_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane048_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane049"
                    position={[-100.11, 15.93, 231.83]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.09}
                  >
                    <group name="Object_162" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane049_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane049_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane050"
                    position={[-107.13, -69.89, 155.62]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.87}
                  >
                    <group name="Object_165" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane050_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane050_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane051"
                    position={[64.88, 5.03, 176.09]}
                    rotation={[0, 0, -2.97]}
                    scale={0.23}
                  >
                    <group name="Object_168" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane051_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane051_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane052"
                    position={[33.31, -34.21, 146.54]}
                    rotation={[0, 0, -2.97]}
                    scale={0.55}
                  >
                    <group name="Object_171" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane052_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane052_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane053"
                    position={[-0.58, -13.72, 176.09]}
                    rotation={[0, 0, -2.97]}
                    scale={0.23}
                  >
                    <group name="Object_174" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane053_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane053_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane054"
                    position={[-21.71, -43.66, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_177" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane054_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane054_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane055"
                    position={[10.04, -50.3, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_180" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane055_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane055_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane056"
                    position={[-17.3, -79.12, 176.09]}
                    rotation={[0, 0, -2.97]}
                    scale={0.23}
                  >
                    <group name="Object_183" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane056_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane056_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane057"
                    position={[78.15, -49, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_186" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane057_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane057_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane058"
                    position={[123.77, -58.44, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_189" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane058_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane058_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane059"
                    position={[44.88, 46.45, 74.07]}
                    rotation={[0, 0, -2.97]}
                    scale={1.02}
                  >
                    <group name="Object_192" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane059_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane059_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane060"
                    position={[-44.93, 37.74, 107.78]}
                    rotation={[0, 0, -2.97]}
                    scale={0.87}
                  >
                    <group name="Object_195" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane060_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane060_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane061"
                    position={[-22.61, 49.09, 172.34]}
                    rotation={[0, 0, -2.36]}
                    scale={0.55}
                  >
                    <group name="Object_198" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane061_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane061_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane062"
                    position={[-25.96, -1.15, 133.58]}
                    rotation={[0, 0, -2.36]}
                    scale={0.87}
                  >
                    <group name="Object_201" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane062_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane062_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane063"
                    position={[-65.47, -3.81, 172.34]}
                    rotation={[0, 0, -2.36]}
                    scale={0.55}
                  >
                    <group name="Object_204" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane063_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane063_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane064"
                    position={[-65.6, -40.45, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_207" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane064_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane064_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane065"
                    position={[-35.79, -27.68, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_210" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane065_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane065_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane066"
                    position={[-41.65, -66.97, 172.34]}
                    rotation={[0, 0, -2.36]}
                    scale={0.55}
                  >
                    <group name="Object_213" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane066_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane066_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane067"
                    position={[19.25, 12.45, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_216" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane067_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane067_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane068"
                    position={[62.04, 30.88, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_219" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane068_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane068_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane069"
                    position={[-62.75, 71.55, 209.86]}
                    rotation={[0, 0, -2.36]}
                    scale={0.09}
                  >
                    <group name="Object_222" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane069_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane069_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane070"
                    position={[-131.32, 12.9, 99.87]}
                    rotation={[0, 0, -2.36]}
                    scale={1.02}
                  >
                    <group name="Object_225" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane070_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane070_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane071"
                    position={[71.05, -12.61, 172.34]}
                    rotation={[0, 0, 2.36]}
                    scale={0.55}
                  >
                    <group name="Object_228" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane071_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane071_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane072"
                    position={[20.8, -9.26, 133.58]}
                    rotation={[0, 0, 2.36]}
                    scale={0.87}
                  >
                    <group name="Object_231" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane072_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane072_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane073"
                    position={[18.15, 30.25, 172.34]}
                    rotation={[0, 0, 2.36]}
                    scale={0.55}
                  >
                    <group name="Object_234" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane073_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane073_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane074"
                    position={[-18.5, 30.39, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_237" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane074_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane074_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane075"
                    position={[-5.73, 0.57, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_240" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane075_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane075_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane076"
                    position={[-45.01, 6.44, 172.34]}
                    rotation={[0, 0, 2.36]}
                    scale={0.55}
                  >
                    <group name="Object_243" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane076_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane076_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane077"
                    position={[34.41, -54.47, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_246" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane077_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane077_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane078"
                    position={[52.83, -97.26, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_249" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane078_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane078_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane079"
                    position={[93.51, 27.53, 209.86]}
                    rotation={[0, 0, 2.36]}
                    scale={0.09}
                  >
                    <group name="Object_252" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane079_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane079_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane080"
                    position={[34.86, 96.1, 99.87]}
                    rotation={[0, 0, 2.36]}
                    scale={1.02}
                  >
                    <group name="Object_255" position={[0, 0, -7.1]}>
                      <mesh
                        name="Plane080_16_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Plane080_16_-_Default_0"].geometry}
                        material={materials["16_-_Default"]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/rain-transformed.glb");
