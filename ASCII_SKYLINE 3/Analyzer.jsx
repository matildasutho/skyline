import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useData } from "./DataContext";
import { AsciiRenderer } from "@react-three/drei";

export default function Analyzer({ sound }, { colorChange }) {
  const mesh = useRef();
  const analyser = useRef();
  const { dataAv, data, setData, backGround } = useData(); // Get the setData function from the context and import the data value!!
  const toggleSound = useState();

  useEffect(() => {
    analyser.current = new THREE.AudioAnalyser(sound.current, 32);
  }, [sound]);

  console.log(colorChange);

  const movingColor = () => {
    useFrame(() => {
      if (analyser.current) {
        const data = analyser.current.getFrequencyData();
        const dataAv = analyser.current.getAverageFrequency();

        setData(data, dataAv);
        //console.log(colorChange);
        // Update the data value in the context with the new value
        //   console.log(data); //get this value out of the function?
        //   console.log(dataAv);
        const backGround = "rgba(255, 255, " + dataAv + ", 0)";
      }
    });
  };
  console.log(backGround);
  const foreGround = "rgb(255, 255, 255)";

  return (
    <>
      <AsciiRenderer
        bgColor={backGround}
        fgColor={foreGround}
        characters={".,*~!#`_=+/†º•ª§∞πøˆ¨¥†®°´}{"}
      />
    </>
  );
}
