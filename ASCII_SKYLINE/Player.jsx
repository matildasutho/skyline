import React, { Suspense, useRef, useState, useEffect } from "react";
import { PositionalAudio } from "@react-three/drei";
import DashBoard from "../ui/dashboard/DashBoard.jsx";
import Analyzer from "../Analyzer.jsx";
import "../ui/dashboard/DashBoard.css";

export default function PlaySound() {
    const tracks = [
        "/tracks/Asphalt.mp3",
        "/tracks/City Report.mp3",
        "/tracks/Morning Shift.mp3",
        "/tracks/Skyline.mp3",
        "/tracks/Skyline (Privacy Remix).mp3",
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const sound = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isChangingTrack, setIsChangingTrack] = useState(false);
    const [foreground, setForeground] = useState("rgb(0, 0, 255)"); // Default foreground color (red)
    const [background, setBackground] = useState("rgb(190, 190, 190)"); // Default background color (cyan)
    const [characters, setCharacters] = useState(
        ".,*~!#`_=+/†º•ª§∞πøˆ¨¥†®°´}{"
    );

    const [currentTime, setCurrentTime] = useState(0); // State to keep track of currentTime

    useEffect(() => {
        if (sound.current.isPlaying === true) {
            sound.current.currentTime = currentTime; // Set the currentTime of the audio
            sound.current.play();
        } else {
            sound.current.pause();
        }
    }, [currentTime, isPlaying]);

    // New function to handle audio play and pause
    const playPauseAudio = () => {
        setIsPlaying((prevIsPlaying) => {
            const newIsPlaying = !prevIsPlaying;
            if (newIsPlaying) {
                sound.current.play();
            } else {
                sound.current.pause();
            }
            console.log("Is playing:", newIsPlaying);
            return newIsPlaying;
        });
    };

    // New function to handle track changes
    const changeTrack = (nextTrackIndex) => {
        sound.current.pause();
        setIsChangingTrack(true); // Set the flag to true when track change is in progress
        setCurrentTime(0);
        setCurrentTrackIndex(
            (prevIndex) => (nextTrackIndex + tracks.length) % tracks.length
        );
    };

    // useEffect hook to handle audio playback when the track changes
    useEffect(() => {
        if (isChangingTrack) {
            sound.current?.play();
            setIsChangingTrack(false); // Reset the flag after track change is completed
        }
    }, [isChangingTrack]);

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
    console.log(currentTrackIndex);

    const display = url.replace("/tracks/", "").replace(".mp3", "");

    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio
                    url={tracks[currentTrackIndex]}
                    ref={(audio) => (sound.current = audio)} // Update the sound.current reference
                    onEnded={() => {
                        useEffect(() => {
                            if (sound.current) {
                                sound.current.onEnded(() => {
                                    // Play the next track when the audio ends
                                    changeTrack(currentTrackIndex + 1);
                                });
                            }
                        }, [currentTrackIndex]);
                    }}
                />
                <Analyzer
                    sound={sound}
                    backGround={background}
                    foreGround={foreground}
                    characTers={characters}
                />
            </Suspense>

            <DashBoard
                ffaction={() => changeTrack(currentTrackIndex + 1)}
                rewaction={() => changeTrack(currentTrackIndex - 1)}
                toggleaction={playPauseAudio}
                trackDisplay={display}
                input={" "}
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
                        background: "rgb(220, 220, 220)",
                        foreground: "rgb(100, 0, 255)",
                        characters: ".~*_(=+/§",
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
