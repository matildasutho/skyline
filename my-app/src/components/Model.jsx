import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/free_buick_riviera_car/scene.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.1, 0.343, 1]} rotation={[-1.6, 0, -3.1]}>
        <group
          position={[0.002, 0.082, 0.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={0.001}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.carpaint_metalic_brown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.plastic_rough}
            position={[-12.959, -143.69, -1133.416]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.chrome}
            position={[17.418, 396.597, 231.552]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.chrome}
            position={[-8.942, -87.195, -467.696]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.chrome}
            position={[-6.986, 208.548, -753.693]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.chrome}
            position={[0, -51.239, -2374.789]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.dash}
            position={[-258.938, 80.221, -731.891]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.glass}
            position={[-0.001, 469.128, 191.97]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.glass}
            position={[-391.643, 180.985, -861.044]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.glass}
            position={[-0.001, -87.674, -323.657]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.glass_red}
            position={[0, -17.745, 2473.672]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.chrome}
            position={[0, -32.846, 2482.858]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.material}
            position={[-7.202, 4.527, -45.747]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.int_brown}
            position={[-12.558, -31.98, -0.357]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.int_brown}
            position={[-1.868, -92.046, 403.542]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.plastic}
            position={[-186.396, 146.208, -629.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.palte}
            position={[-13.944, -233.333, 1.183]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials.glass}
            position={[-0.001, -51.38, -2410.362]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.plastic_white}
            position={[-122.263, 178.895, -886.691]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials.wood}
            position={[-0.001, 52.746, -141.553]}
          />
        </group>
      </group>
      <group position={[0.656, 0.327, 1.644]} rotation={[0.531, -0.035, 0.02]}>
        <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.001}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.chrome}
            position={[-84.125, -0.199, 0.068]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials.black_paint}
            position={[-48.549, 0.009, 0.007]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials.plastic_white}
            position={[-110.389, 0.008, 0.008]}
          />
        </group>
      </group>
      <group position={[-0.838, 0.327, 1.645]} rotation={[0.531, -0.035, 0.02]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.001, -0.001, 0.001]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_56.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_58.geometry}
            material={materials.chrome}
            position={[-84.161, -0.2, 0.07]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials.black_paint}
            position={[-48.586, 0.008, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials.plastic_white}
            position={[-110.425, 0.007, 0.011]}
          />
        </group>
      </group>
      <group position={[0.656, 0.326, -1.362]} rotation={[0.531, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.001}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_65.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.chrome}
            position={[-68.039, 0.009, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69.geometry}
            material={materials.chrome}
            position={[-92.096, -0.303, 0.09]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71.geometry}
            material={materials.black_paint}
            position={[-48.549, 0.009, -0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73.geometry}
            material={materials.plastic_white}
            position={[-110.389, 0.009, 0]}
          />
        </group>
      </group>
      <group position={[-0.838, 0.326, -1.362]} rotation={[0.531, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.001, -0.001, 0.001]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_78.geometry}
            material={materials.chrome}
            position={[-68.069, 0.01, -0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_80.geometry}
            material={materials.chrome}
            position={[-92.131, -0.302, 0.089]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials.black_paint}
            position={[-48.573, 0.009, -0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials.plastic_white}
            position={[-110.411, 0.009, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/free_buick_riviera_car/scene.glb");