import React, { Suspense, useRef, useState } from "react";
import { PositionalAudio } from "@react-three/drei";
import DashBoard from "./ui/dashboard/DashBoard.jsx";
import Analyzer from "./Analyzer.jsx";
import "./ui/dashboard/DashBoard.css";

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
    const stateView = useState();
    const [foreground, setForeground] = useState("rgb(0, 0, 255)"); // Default foreground color (red)
    const [background, setBackground] = useState("rgb(190, 190, 190)"); // Default background color (cyan)
    const [characters, setCharacters] = useState(
        ".,*~!#`_=+/†º•ª§∞πøˆ¨¥†®°´}{"
    );

    const toggleSound = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? sound.current.pause() : sound.current.play();
    };

    const handleNextTrack = () => {
        // sound.current.pause();
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
        sound.current.currentTime = 0;
        sound.current.play();
    };

    const handlePrevTrack = () => {
        // sound.current.pause();
        setCurrentTrackIndex(
            (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
        );
        sound.current.currentTime = 0;
        sound.current.play();
    };

    const handleColorChange = (colorType, palette) => {
        switch (colorType) {
            case "background":
                setBackground(palette.background);
                setForeground(palette.foreground);
                setCharacters(palette.characters);
                break;
            // Add more cases for additional color options if needed
            default:
                break;
        }
    };
    const url = tracks[currentTrackIndex];
    console.log(tracks, currentTrackIndex);

    const display = url.replace("/tracks/", "").replace(".mp3", " - RADIOFEAR");

    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio url={tracks[currentTrackIndex]} ref={sound} />
                <Analyzer
                    sound={sound}
                    backGround={background}
                    foreGround={foreground}
                    characTers={characters}
                />
            </Suspense>

            <DashBoard
                ffaction={handleNextTrack}
                rewaction={handlePrevTrack}
                toggleaction={toggleSound}
                trackDisplay={display}
                input={" "}
                label={isPlaying ? "PAUSE" : "PLAY"}
                button1={() =>
                    handleColorChange("background", {
                        background: "rgb(195, 200, 186)",
                        foreground: "rgb(122, 154, 214)",
                        characters: ".,_#▓░^+$~#`}{*'t",
                    })
                }
                button2={() =>
                    handleColorChange("background", {
                        background: "rgb(0, 0, 0)",
                        foreground: "rgb(0, 150, 100)",
                        characters: ".#`_{,*~!",
                    })
                }
                button3={() =>
                    handleColorChange("background", {
                        background: "rgb(170, 170, 170)",
                        foreground: "rgb(100, 0, 255)",
                        characters: ".$*_~=+/§",
                    })
                }
                button4={() =>
                    handleColorChange("background", {
                        background: "rgb(112, 95, 95)",
                        foreground: "rgb(175, 236, 237)",
                        characters: ".,░_^{«~▄#`_!*",
                    })
                }
                button5={() =>
                    handleColorChange("background", {
                        background: "rgb(38, 109, 133)",
                        foreground: "rgb(176, 200, 209)",
                        characters: "._╬_{,></*~!",
                    })
                }
                button6={() =>
                    handleColorChange("background", {
                        background: "rgb(163, 95, 163)",
                        foreground: "rgb(0, 0, 255)",
                        characters: ".,░_^{▄«~#`_!*",
                    })
                }
            ></DashBoard>
        </>
    );
}
