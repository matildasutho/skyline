import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PositionalAudio } from "@react-three/drei";
import { useData } from "./DataContext";
import { Analyzer } from "./Analyzer";

export function PlaySound({ url }) {
  const sound = useRef();

  return (
    <>
      <Suspense fallback={null}>
        <PositionalAudio autoplay url={url} ref={sound} />
        <Analyzer sound={sound} />
      </Suspense>
    </>
  );
}
