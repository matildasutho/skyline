import React, { Suspense, useRef, useState, useEffect } from "react";
import { PositionalAudio } from "@react-three/drei";
import DashBoard from "../ui/dashboard/DashBoard.jsx";
import AsciiEffect from "../AsciiEffect.jsx";
import "../ui/dashboard/DashBoard.css";

const tracks = [
    "/tracks/Asphalt.mp3",
    "/tracks/City Report.mp3",
    "/tracks/Morning Shift.mp3",
    "/tracks/Skyline.mp3",
    "/tracks/Skyline (Privacy Remix).mp3",
];

const colorPalettes = [
    {
        background: "rgb(195, 200, 186)",
        foreground: "rgb(122, 154, 214)",
        characters: ".,_#▓░^+$~#`}{*'t",
    },
    {
        background: "rgb(0, 0, 0)",
        foreground: "rgb(0, 150, 100)",
        characters: ".#`_{,*~!",
    },
    {
        background: "rgb(75, 75, 75)",
        foreground: "rgb(200, 220, 255)",
        characters: ".*~_^`/§▄(#`^{!}=+",
    },
    {
        background: "rgb(112, 95, 95)",
        foreground: "rgb(175, 236, 237)",
        characters: ".,░_^{«~▄#`_!*",
    },
    {
        background: "rgb(38, 109, 133)",
        foreground: "rgb(176, 200, 209)",
        characters: "._╬_{,></*~!",
    },
    {
        background: "rgb(135, 135, 160)",
        foreground: "rgb(0, 0, 200)",
        characters: ".,░_▄«~#`_!*",
    },
    // Add more color palettes as needed
];

export default function PlaySound() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const sound = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [colorPalette, setColorPalette] = useState(colorPalettes[0]);

    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (sound.current && isPlaying) {
            sound.current.currentTime = currentTime; // Set the currentTime of the audio
            sound.current.play();
        } else if (sound.current) {
            sound.current.pause();
        }
    }, [currentTime, isPlaying]);

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

    const changeTrack = (nextTrackIndex) => {
        sound.current.pause();
        setIsPlaying(false);
        setCurrentTime(0);
        setCurrentTrackIndex(
            (prevIndex) => (nextTrackIndex + tracks.length) % tracks.length
        );
    };

    useEffect(() => {
        if (isPlaying) {
            sound.current?.play();
        }
    }, [isPlaying]);

    const handleColorChange = (palette) => {
        setColorPalette(palette);
    };

    const url = tracks[currentTrackIndex];
    const display = url.replace("/tracks/", "").replace(".mp3", "");

    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio
                    url={tracks[currentTrackIndex]}
                    ref={(audio) => (sound.current = audio)}
                    onEnded={() => {
                        changeTrack(currentTrackIndex + 1);
                    }}
                />
                <AsciiEffect
                    sound={sound}
                    backGround={colorPalette.background}
                    foreGround={colorPalette.foreground}
                    characTers={colorPalette.characters}
                />
            </Suspense>

            <DashBoard
                ffaction={() => changeTrack(currentTrackIndex + 1)}
                rewaction={() => changeTrack(currentTrackIndex - 1)}
                toggleaction={playPauseAudio}
                trackDisplay={display}
                input={" "}
                button1={() => handleColorChange(colorPalettes[0])}
                button2={() => handleColorChange(colorPalettes[1])}
                button3={() => handleColorChange(colorPalettes[2])}
                button4={() => handleColorChange(colorPalettes[3])}
                button5={() => handleColorChange(colorPalettes[4])}
                button6={() => handleColorChange(colorPalettes[5])}
                // Add more buttons with color palettes as needed
            />
        </>
    );
}
