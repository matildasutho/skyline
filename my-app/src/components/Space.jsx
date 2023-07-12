import * as THREE from "three";
import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Environment,
  useEnvironment,
  useVideoTexture,
  useTexture,
} from "@react-three/drei";
import src from "/360-VR-video.mp4";

export default function Space() {
  const { environment } = useEnvironment();
  const { videoTexture } = useVideoTexture("/WZRD-skyline-test.mp4"); //create function to load and play video as texture?? import?
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

  return (
    <>
      <mesh>
        <sphereGeometry args={[500, 500, 500]} />
        <VideoMaterial src={src} setVideo={setVideo} />
      </mesh>
      {environment && <primitive object={environment.scene} />}
      <mesh>
        <Environment background color={"blue"} />
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

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}