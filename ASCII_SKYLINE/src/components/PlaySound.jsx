import React, { Suspense, useRef, useState } from "react";
import { PositionalAudio, Html, RoundedBox } from "@react-three/drei";
import DashBoard from "./ui/dashboard/DashBoard.jsx";
import Analyzer from "./Analyzer.jsx";

export default function PlaySound() {
    const tracks = [
        "/tracks/Asphalt.mp3",
        "/tracks/City Report.mp3",
        "/tracks/Morning Shift.mp3",
        "/tracks/Skyline.mp3",
        "/tracks/Skyline (Privacy Remix).mp3",
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const sound = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleSound = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? sound.current.pause() : sound.current.play();
    };

    const handleNextTrack = () => {
        setIsPlaying(false);
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    };

    const handlePrevTrack = () => {
        setIsPlaying(false);
        setCurrentTrackIndex(
            (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
        );
    };

    const url = tracks[currentTrackIndex];
    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio key={url} url={url} ref={sound} />
                <Analyzer sound={sound} />
            </Suspense>
            <DashBoard
                ffaction={handleNextTrack}
                rewaction={handlePrevTrack}
                toggleaction={toggleSound}
            >
                {" "}
                {isPlaying ? "PAUSE" : "PLAY"}
            </DashBoard>

            {/* <Button label={"REW"} onClick={handlePrevTrack} />
            <Button label={"FF"} onClick={handleNextTrack} /> */}
            {/* <Button
                label={isPlaying ? "PAUSE" : "PLAY"}
                onClick={toggleSound}
            /> */}
        </>
    );
}
