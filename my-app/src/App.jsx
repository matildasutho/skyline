import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  PositionalAudio,
} from "@react-three/drei";
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
import { PlaySound } from "./components/LoadTracks.jsx";

function ThreeScene() {
  return (
    <>
      <OrbitControls maxDistance={[0.1]} />
      <PerspectiveCamera makeDefault fov={50} position={[-0.05, 0.05, 1]} />
      <Model
        scale={0.5}
        position={[-2, -12, -8]}
        rotation={[0, -0.15, 0]}
      ></Model>
      <Space />
    </>
  );
}

function App() {
  return (
    <>
      <VRButton />
      <Canvas
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
          <PlaySound url='/Asphalt.mp3' />
          <Controllers />
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
          <EffectComposer multisampling={0} disableNormalPass={true}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={200}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={1}
              height={300}
              opacity={1}
            />
            <Noise opacity={0.025} />
            <Vignette eskil={false} offset={0.1} darkness={0.2} />
          </EffectComposer>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
