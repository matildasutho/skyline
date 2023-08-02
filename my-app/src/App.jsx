// import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  AsciiRenderer,
} from "@react-three/drei";
import { VRButton, XR, Controllers } from "@react-three/xr";
import "./App.css";
import Space from "./components/Space.jsx";
import DataProvider from "./components/DataContext.jsx";


function ThreeScene() {
  return (
    <>
      <ambientLight color={[0.1, 0.05, 0.05]} />
      <pointLight position={[0, 10, 10]} intensity={0.4} color={[0, 0, 1]} />
      <OrbitControls maxDistance={[0.1]} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 1.7]} />
      <AsciiRenderer
        bgColor={"rgb(142, 142, 142)"}
        fgColor={"rgb(0, 0, 0)"}
        characters={"*~!#`_=+/©ø∂†∫.,º•ª§∞πøˆ¨¥†®°´}{"}
      /> 
      {/* The Space component to be used with the ASCII effect */}
      <Space />
    </>
  );
}

function App() {
  return (
    <>
      <DataProvider>
        {/* <VRButton /> */}
        <Canvas
          camera={{ position: [0, 0, 3] }}s
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
          </XR>
        </Canvas>
      </DataProvider>
    </>
  );
}

export default App;
