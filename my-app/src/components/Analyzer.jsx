import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useData } from "./DataContext"; // Import the useData hook
import {
  MeshDistortMaterial,
  useCubeTexture,
  useTexture,
} from "@react-three/drei";

export function Analyzer({ sound }) {
  const mesh = useRef();
  const analyser = useRef();
  const { data, setData } = useData(); // Get the setData function from the context and import the data value!!

  useEffect(() => {
    analyser.current = new THREE.AudioAnalyser(sound.current, 32);
  }, [sound]);

  useFrame(() => {
    if (analyser.current) {
      const data = analyser.current.getAverageFrequency();
      setData(data); // Update the data value in the context with the new value
      //   console.log(data); //get this value out of the function?
    }
  });
  const bumpMap = useTexture("/nx.png");
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/" }
  );

  const [set] = useState();

  const [material, setMaterial] = useState();

  useEffect(() => {
    if (material) {
      const color = new THREE.Color(data / 150, data / 500, 0.3);
      material.color = color;
      material.bumpScale = data;
    }
  }, [data, material]);

  return (
    <>
      <mesh>
        <sphereGeometry args={[50, 50, 50]} />
        <MeshDistortMaterial
          side={THREE.BackSide}
          ref={set}
          envMap={envMap}
          bumpMap={bumpMap}
          color={new THREE.Color(data / 150, data / 200, 0.3)}
          roughness={0.1}
          metalness={0.1}
          bumpScale={data}
          clearcoat={1}
          clearcoatRoughness={0.2}
          radius={1}
          distort={0.8}
        />
      </mesh>
    </>
  );
}
