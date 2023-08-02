import React, { Suspense, useRef, useState } from "react";
import { PositionalAudio, Html, RoundedBox } from "@react-three/drei";
import Button from "./ui/button/Button.jsx";
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
    console.log(currentTrackIndex);

    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio key={url} url={url} ref={sound} />
                <Analyzer sound={sound} />
            </Suspense>

            {/* <Button label={"REW"} onClick={handlePrevTrack} />
            <Button label={"FF"} onClick={handleNextTrack} /> */}
            {/* <Button
                label={isPlaying ? "PAUSE" : "PLAY"}
                onClick={toggleSound}
            /> */}
            <Html position={[0, 0, -30]} transform sprite fullscreen>
                <div className="container">
                    <div className="vertical full-width">
                        <div className="horizontal">
                            <span className="casette">SKYLINE</span>
                            {/* <span className="label">{current}</span> */}
                        </div>
                        <div className="horizontal">
                            <div className="vertical">
                                <span className="link">BC</span>
                                <span className="link">SC</span>
                            </div>
                            <div className="vertical">
                                <span className="link">BC</span>
                                <span className="link">SC</span>
                            </div>
                            <div className="vertical">
                                <button
                                    className="ff_button nav"
                                    onClick={handleNextTrack}
                                >
                                    FF
                                </button>
                                <button
                                    className="rew_button nav"
                                    onClick={handlePrevTrack}
                                >
                                    REW
                                </button>
                            </div>
                            <div className="vertical">
                                <div className="horizontal">
                                    <span className="track_button">1</span>
                                    <span className="track_button">2</span>
                                    <span className="track_button">3</span>
                                </div>
                                <div className="horizontal">
                                    <span className="track_button">4</span>
                                    <span className="track_button">5</span>
                                    <span className="track_button">6</span>
                                </div>
                            </div>
                            <div className="vertical">
                                <span className="link">TUNE</span>
                                <button className="link" onClick={toggleSound}>
                                    {" "}
                                    {isPlaying ? "PAUSE" : "PLAY"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
}
