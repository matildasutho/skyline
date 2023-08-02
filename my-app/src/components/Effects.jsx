import {
    EffectComposer,
    Bloom,
    Noise,
    DepthOfField
  } from "@react-three/postprocessing";


  export default function Effects() {
   return ( 
    <>
   <EffectComposer multisampling={0} disableNormalPass={true}>
    <DepthOfField
      focusDistance={0}
      focalLength={0.02}
      bokehScale={2}
      height={200}
    />
    <Bloom
      luminanceThreshold={0}
      luminanceSmoothing={2}
      height={300}
      opacity={0.5}
    />
    <Noise opacity={0.025} />

    {/* <Vignette eskil={false} offset={0.1} darkness={0.2} /> */}
  </EffectComposer>
  </>
  );
  }