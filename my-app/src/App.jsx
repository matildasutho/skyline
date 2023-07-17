import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { VRButton, XR, Controllers } from "@react-three/xr";
import "./App.css";
import Space from "./components/Space.jsx";
import Model from "./components/Model.jsx";

function ThreeScene() {
  return (
    <>
      <OrbitControls maxDistance={[0.1]} />
      <PerspectiveCamera makeDefault fov={50} position={[-0.05, 0.05, 1]} />
      <Model scale={0.5} position={[-2, -12, -8]} rotation={[0, -0.15, 0]} />
      <Space />
    </>
  );
}

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
