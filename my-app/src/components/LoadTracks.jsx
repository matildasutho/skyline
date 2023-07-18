import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PositionalAudio } from "@react-three/drei";

function Analyzer({ sound }) {
  // <Analyzer /> will not run before everything else in the suspense block is resolved.
  // That means <PositionalAudio/>, which executes async, is ready by the time we're here.
  // The next frame (useEffect) is guaranteed(!) to access positional-audios ref.
  const mesh = useRef(); //state variables
  const analyser = useRef();
  useFrame(() => {
    const data = analyser.current.getAverageFrequency();
    console.log(data);
  });
  useEffect(
    () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32)),
    []
  );

  //   useFrame(() => {
  //     if (analyser.current) {
  //       const data = analyser.current.getAverageFrequency();
  //       //   mesh.current.material.color.setRGB(data / 100, 0, 0);
  //       mesh.current.scale.x =
  //         mesh.current.scale.y =
  //         mesh.current.scale.z =
  //           (data / 100) * 2;
  //     }
  //   });
}

export function PlaySound({ url }) {
  // This component creates a suspense block, blocking execution until
  // all async tasks (in this case PositionAudio) have been resolved.
  const sound = useRef();

  return (
    <Suspense fallback={null}>
      <PositionalAudio autoplay url={url} ref={sound} />
      <Analyzer sound={sound} />
    </Suspense>
  );
}
