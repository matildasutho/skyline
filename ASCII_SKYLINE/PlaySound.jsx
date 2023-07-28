import React, { Suspense, useRef, useState, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
import { PositionalAudio, Html, RoundedBox } from "@react-three/drei";
// import { useData } from "./DataContext";

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

export function PlaySound() {
  const mod = (n, r) => ((n % r) + r) % r;

  function* stepGen(steps) {
    let index = 0;
    while (true) {
      index = mod(index, steps.length);
      console.log(index);
    }
  }
  const tracks = [
    "/tracks/Asphalt.mp3",
    "/tracks/City Report.mp3",
    "/tracks/Morning Shift.mp3",
    "/tracks/Skyline.mp3",
    "/tracks/Skyline (Privacy Remix).mp3",
  ];
  const [gen, setGen] = useState(() => stepGen(tracks));
  const getPrev = () => gen.next(-1).value;
  const getNext = () => gen.next(1).value;

  // const init = getNext();

  // const [current, setCurrent] = useState(init);
  const init = getNext();

  const reWind = () => {
    const prev = getPrev();
    setCurrent(prev);
  };
  const fastForward = () => {
    const next = getNext();
    setCurrent(next);
  };

  const [current, setCurrent] = useState(init);

  const sound = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? sound.current.pause() : sound.current.play();
  };

  const url = current;
  const AudioSwitch = React.forwardRef((props, ref) => (
    <mesh>
      <RoundedBox args={[16, 9, 1]} position={[0, 0, 5]} />
      <meshBasicMaterial color='pink'></meshBasicMaterial>
      <Html position={[0, 0, -30]} transform sprite fullscreen>
        <div className='container'>
          <div className='vertical full-width'>
            <div className='horizontal'>
              <span className='casette'>SKYLINE</span>
              <span className='label'>{current}</span>
            </div>
            <div className='horizontal'>
              <div className='vertical'>
                <span className='link'>BC</span>
                <span className='link'>SC</span>
              </div>
              <div className='vertical'>
                <span className='link'>BC</span>
                <span className='link'>SC</span>
              </div>
              <div className='vertical'>
                <button className='ff_button nav' onClick={fastForward}>
                  FF
                </button>
                <button className='rew_button nav' onClick={reWind}>
                  REW
                </button>
              </div>
              <div className='vertical'>
                <div className='horizontal'>
                  <span className='track_button'>1</span>
                  <span className='track_button'>2</span>
                  <span className='track_button'>3</span>
                </div>
                <div className='horizontal'>
                  <span className='track_button'>4</span>
                  <span className='track_button'>5</span>
                  <span className='track_button'>6</span>
                </div>
              </div>
              <div className='vertical'>
                <span className='link'>TUNE</span>
                <button className='link' ref={ref} onClick={toggleSound}>
                  {" "}
                  {isPlaying ? "PAUSE" : "PLAY"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Html>
    </mesh>
  ));

  return (
    <>
      <Suspense fallback={null}>
        <PositionalAudio url={url} ref={sound} />

        {/* <Analyzer sound={sound} /> */}
      </Suspense>
      <AudioSwitch />
    </>
  );
}
