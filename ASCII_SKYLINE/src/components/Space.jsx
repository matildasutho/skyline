import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import {
    Environment,
    useEnvironment,
    useVideoTexture,
} from "@react-three/drei";
import VideoMaterial from "./video/VideoMaterial";
import footage from "/car_video.mp4";

export default function Space() {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.stop();
        }
    }, []);

    const [video, setVideo] = useState();

    const { environment } = useEnvironment();

    // const ratio = 16 / 9;
    // const sound = useRef();
    // const [data, setData] = useState(0); // State to hold the data

    // const [material, set] = useState();
    return (
        <>
            <mesh>
                <sphereGeometry args={[50, 10, 5]} />
                <VideoMaterial src={footage} setVideo={setVideo} />
            </mesh>
            {environment && <primitive object={environment.scene} />}
            <mesh>
                <Environment background color={"blue"} />
            </mesh>
        </>
    );
}
