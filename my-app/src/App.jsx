import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useEnvironment,
} from "@react-three/drei";

function ThreeScene() {
  const { environment } = useEnvironment();
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"yellow"} />
      </mesh>

      {environment && <primitive object={environment.scene} />}
    </>
  );
}

function App() {
  return (
    <Canvas>
      <Environment
        background
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path='/'
      />
      <ThreeScene />
    </Canvas>
  );
}

export default App;
