import * as THREE from "three";
import React, { Suspense, useEffect, useRef } from "react";
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
import video from "/WZRD-skyline-test.mp4";

function ThreeScene() {
  const { environment } = useEnvironment();
  const { videoTexture } = useVideoTexture("/WZRD-skyline-test.mp4"); //create function to load and play video as texture?? import?
  const videoRef = useRef();

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, []);

  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <mesh>
        <boxGeometry args={[200, 200, 200]} />
        <meshStandardMaterial map={videoTexture} side={THREE.DoubleSide} />
      </mesh>
      <Suspense fallback={<FallbackMaterial url='/ny.png' />}>
        <mesh>
          <planeGeometry args={[45, 25]} />
          <VideoMaterial url={video} side={THREE.DoubleSide} />
        </mesh>
      </Suspense>
      {environment && <primitive object={environment.scene} />}

      <Environment
        background
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path='/'
      />
    </>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
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
