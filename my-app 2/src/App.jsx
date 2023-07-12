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

function VideoMaterial({ file }) {
  const { texture } = useVideoTexture(file);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function ThreeScene() {
  const { environment } = useEnvironment();
  // const { texture } = useVideoTexture({ file: "/360-VR-video.mp4" });
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"yellow"} />
      </mesh>

      {environment && <primitive object={environment.scene} />}
      <Suspense>
        <Environment
          background
          // files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
          // path='/'
        />
        <VideoMaterial file={"/360-VR-video.mp4"} />
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
