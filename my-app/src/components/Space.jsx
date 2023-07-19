import * as THREE from "three";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useTexture, useCubeTexture } from "@react-three/drei";
import src from "/360-VR-video.mp4";
import { PlaySound } from "./PlaySound.jsx";
import DataProvider from "./DataContext.jsx";

export default function Space() {
  const sound = useRef();
  const [material, set] = useState();

  return (
    <>
      <PlaySound url='/City Report.mp3' />
    </>
  );
}
