import * as THREE from "three";
import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Environment,
  useEnvironment,
  useVideoTexture,
} from "@react-three/drei";
import src from "/car_video.mp4";
import { PlaySound } from "./PlaySound.jsx";

export default function Space() {
  const { environment } = useEnvironment();
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.stop();
    }
  }, []);

  const [video, setVideo] = useState();

  const ratio = 16 / 9;
  const width = 200;
  const radius = 200;
  const z = 4;

  const r = useMemo(
    () => (video ? video.videoWidth / video.videoHeight : ratio),
    [video, ratio]
  );

  const sound = useRef();
  const [data, setData] = useState(0); // State to hold the data

  function handleDataUpdate(newData) {
    setData(newData); // Update the data state when the data changes in the Analyzer component
    useFrame(() => {
      return data;
    });
  }

  const [material, set] = useState();
  return (
    <>
      <PlaySound url='/Skyline.mp3' />
      <mesh>
        <sphereBufferGeometry args={[5, 4, 2]} />
        <VideoMaterial src={src} setVideo={setVideo} />
      </mesh>
      {environment && <primitive object={environment.scene} />}
      <mesh>
        <Environment />
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

