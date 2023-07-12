import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useEnvironment,
  useVideoTexture,
  useAspect,
  useCubeTexture,
} from "@react-three/drei";

function ThreeScene() {
  const { environment } = useEnvironment();
  const { videoTexture } = useVideoTexture("/360-VR-video.mp4"); //create function to load and play video as texture?? import?
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <mesh>
        <boxGeometry args={[200, 200, 200]} />
        <meshStandardMaterial map={videoTexture} side={THREE.BackSide} />
      </mesh>

      <mesh>
        <planeGeometry args={[45, 25]} />
        <meshStandardMaterial map={videoTexture} toneMapped={false} />
      </mesh>

      {environment && <primitive object={environment.scene} />}

      <Environment
        background
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path='/'
      />
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
