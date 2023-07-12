import * as THREE from "three";
import { useState } from "react";
import { useVideoTexture } from "@react-three/drei";

export function videoMaterial() {
  const video = document.getElementById("video");
  const texture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(1, 1);

  const plane = new THREE.Mesh(geometry, texture);
  return plane;
}
