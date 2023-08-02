import React, { Suspense, useRef, useEffect, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
import { PositionalAudio, Html } from "@react-three/drei";
// import { useData } from "./DataContext";
// import { Shapes } from "../../ShapeGenerator.jsx";

// export function Analyzer({ sound }) {
//   const mesh = useRef();
//   const analyser = useRef();
//   const { dataAv, data, setData } = useData(); // Get the setData function from the context and import the data value!!
//   const toggelSound = useState();

//   useEffect(() => {
//     analyser.current = new THREE.AudioAnalyser(sound.current, 32);
//   }, [sound]);

//   useFrame(() => {
//     if (analyser.current) {
//       const data = analyser.current.getFrequencyData();
//       const dataAv = analyser.current.getAverageFrequency();
//       setData(data, dataAv); // Update the data value in the context with the new value
//       //   console.log(data); //get this value out of the function?
//       // console.log(dataAv);
//     }
//   });
// }

export function PlaySound({ url }) {
  const sound = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? sound.current.pause() : sound.current.play();
  };

  console.log(isPlaying);

  const AudioSwitch = React.forwardRef((props, ref) => (
    <Html>
      <button ref={ref} className='AudioSwitch' onClick={toggleSound}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </Html>
  ));

  return (
    <>
      <Suspense fallback={null}>
        <PositionalAudio url={url} ref={sound} />
        {/* <Analyzer sound={sound} /> */}
        <Shapes />
        <AudioSwitch />
      </Suspense>
    </>
  );
}
