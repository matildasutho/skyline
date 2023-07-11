import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useEnvironment,
  useVideoTexture,
} from "@react-three/drei";

function ThreeScene() {
  const { environment } = useEnvironment();
  const { panoTexture } = useVideoTexture();

  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"yellow"} />
      </mesh>

      {panoTexture && <primitive object={environment.scene} />}

      <Suspense>
        <Environment
          background
          map={panoTexture}
          files={["/360-VR-video.mp4"]}
          path='/'
        ></Environment>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Canvas>
      <ThreeScene />
    </Canvas>
  );
}

export default App;
