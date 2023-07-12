import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Space from "./components/Space.jsx";
import Model from "./components/Model.jsx";

function Controls() {}

function ThreeScene() {
  return (
    <>
      <OrbitControls maxDistance={[0.1]} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0.15, 1]} />
      <Model position={[0, -1, 0.2]} rotation={[0, 3.1, 0]} />
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
