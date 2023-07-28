import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useData } from "./DataContext";

export default function Analyzer({ sound }) {
    const mesh = useRef();
    const analyser = useRef();
    const { dataAv, data, setData } = useData(); // Get the setData function from the context and import the data value!!
    const toggleSound = useState();

    useEffect(() => {
        analyser.current = new THREE.AudioAnalyser(sound.current, 32);
    }, [sound]);

    useFrame(() => {
        if (analyser.current) {
            const data = analyser.current.getFrequencyData();
            const dataAv = analyser.current.getAverageFrequency();
            setData(data, dataAv); // Update the data value in the context with the new value
            //   console.log(data); //get this value out of the function?
            // console.log(dataAv);
        }
    });
    return null;
}
