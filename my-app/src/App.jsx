import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { VRButton, XR, Controllers } from "@react-three/xr";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
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
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 3] }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <XR>
          <Controllers />
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
          <EffectComposer multisampling={0} disableNormalPass={true}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
              opacity={3}
            />
            <Noise opacity={0.025} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
