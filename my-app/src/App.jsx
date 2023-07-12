import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CurvedPlane from "./components/CurvedPlane.jsx";
import Car from "./components/Car.jsx";
import Space from "./components/Space.jsx";

function ThreeScene() {
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <Car />
      <Space />
    </>
  );
}

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
    </Canvas>
  );
}

export default App;
