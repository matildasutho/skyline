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
import PlaySound from "./components/PlaySound";
import Effects from "./components/Effects.jsx";

function ThreeScene() {
    return (
        <>
            <ambientLight color={[0.1, 0.05, 0.05]} />
            <pointLight position={[0, 10, 0]} intensity={[1]} color="blue" />
            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 1.5]} />
            <OrbitControls maxDistance={[0.1]} />
            <Effects />
            {/* The Space component to be used with the ASCII effect */}
            <Space />
            <PlaySound />
        </>
    );
}

function App() {
    return (
        <>
            <DataProvider>
                {/* <VRButton /> */}
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
