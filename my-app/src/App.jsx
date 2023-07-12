import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
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
  useTexture,
} from "@react-three/drei";
import src from "/WZRD-skyline-test.mp4";
import CurvedPlane from "./CurvedPlane.jsx";

function ThreeScene() {
  const { environment } = useEnvironment();
  const { videoTexture } = useVideoTexture("/WZRD-skyline-test.mp4"); //create function to load and play video as texture?? import?
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.stop();
    }
  }, []);

  const [video, setVideo] = useState();

  const ratio = 16 / 9;
  const width = 50;
  const radius = 4;
  const z = 4;

  const r = useMemo(
    () => (video ? video.videoWidth / video.videoHeight : ratio),
    [video, ratio]
  );

  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      {/* <mesh>
        <boxGeometry args={[200, 200, 200]} />
        <meshStandardMaterial map={videoTexture} side={THREE.DoubleSide} />
      </mesh> */}
      <CurvedPlane width={width} height={width / r} radius={radius}>
        <Suspense
          fallback={<meshStandardMaterial side={THREE.DoubleSide} wireframe />}
        >
          <VideoMaterial src={src} setVideo={setVideo} />
        </Suspense>
      </CurvedPlane>
      {environment && <primitive object={environment.scene} />}
      <mesh>
        <Environment
          background
          files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
          path='/'
        />
      </mesh>
    </>
  );
}

function VideoMaterial({ src, setVideo }) {
  const texture = useVideoTexture(src);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;

  setVideo?.(texture.image);

  return (
    <meshStandardMaterial
      side={THREE.DoubleSide}
      map={texture}
      toneMapped={false}
      transparent
      opacity={0.9}
    />
  );
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
