import * as THREE from "three";
import React from "react";
import { useVideoTexture } from "@react-three/drei";

const VideoMaterial = ({ src, setVideo }) => {
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
            opacity={1}
        />
    );
};
export default VideoMaterial;
