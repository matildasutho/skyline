import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

function Scene() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color='#84f74f' side={THREE.BackSide} />
        </mesh>
      </Environment>

      <Environment background>
        <mesh scale='100'>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color='#84f74f' side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Scene />
      </Canvas>
    </Suspense>
  );
}

export default App;
