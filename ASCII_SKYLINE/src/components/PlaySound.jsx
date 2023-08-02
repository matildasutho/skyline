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
const [characters, setCharacters] = useState(".,*~!#`_=+/†º•ª§∞πøˆ¨¥†®°´}{")

    const toggleSound = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? sound.current.pause() : sound.current.play();
    };

    const handleNextTrack = () => {
        setIsPlaying(false);
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
        setIsPlaying(true);
    };

    const handlePrevTrack = () => {
        setIsPlaying(false);
        setCurrentTrackIndex(
            (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
        );
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

    const display = url
        .replace("/tracks/", "")
        .replace(".mp3", " - RADIOFEAR");
    
 
    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio url={tracks[currentTrackIndex]} ref={sound} />
                <Analyzer sound={sound} backGround={background} foreGround={foreground} characTers={characters} />
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
            background: "rgb(9, 50, 71)",
              foreground: "rgb(217, 109, 2)",
            characters: ".,_/;!$~#`_{*"
          })
        }
        button2={() =>
          handleColorChange("background", {
            background: "rgb(0, 0, 0)",
              foreground: "rgb(0, 150, 100)",
                        characters: ".#`_{,*~!"
          })
        }
        button3={() =>
          handleColorChange("background", {
            background: "rgb(170, 170, 170)",
              foreground: "rgb(100, 0, 255)",
                                    characters: ".$*_~=+/§"
          })
        }
        button4={() =>
          handleColorChange("background", {
            background: "rgb(0, 0, 255)",
            foreground: "rgb(0, 255, 0)",
          })
        }
        button5={() =>
          handleColorChange("background", {
            background: "rgb(0, 0, 0)",
            foreground: "rgb(0, 150, 100)",
          })
        }
        button6={() =>
          handleColorChange("background", {
            background: "rgb(255, 0, 255)",
            foreground: "rgb(255, 0, 0)",
          })
        }

            ></DashBoard>
        </>
    );
}
