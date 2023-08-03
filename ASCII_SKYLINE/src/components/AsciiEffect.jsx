import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useData } from "./DataContext";
import { AsciiRenderer } from "@react-three/drei";

export default function AsciiEffect({
    sound,
    backGround,
    foreGround,
    characTers,
}) {
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
            setData(data, dataAv);

            // console.log(dataAv);
            // Update the data value in the context with the new value
        }
    });
    // create function to update value with seconds?
    // const foreGround = "rgb(255, 0, 0)";

    // const backGround = "rgb(0, 255, 255)";
    // try placing the renderer in a useEffect hook?
    return (
        <>
            <AsciiRenderer
                bgColor={backGround} // Use the backGround variable defined in the component's scope
                fgColor={foreGround}
                characters={characTers}
            />
        </>
    );
}

//
