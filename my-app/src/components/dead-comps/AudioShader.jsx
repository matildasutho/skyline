import {
  SphereGeometry,
  Vector3,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Mesh,
  Scene,
  AudioListener,
  Audio,
  AudioLoader,
  AudioAnalyser,
  Clock,
} from "three";
import { createSculptureWithGeometry } from "https://unpkg.com/shader-park-core/dist/shader-park-core.esm.js";
import { spCode } from "./spCode.jsx";

export default function AudioShader() {
  const { listener } = new AudioListener();

  const sound = new Audio(listener);

  let button = document.querySelector(".button");
  button.innerHTML = "Loading Audio...";

  const audioLoader = new AudioLoader();
  audioLoader.load("/Asphalt.mp3", function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    button.innerHTML = "Play Audio";
    button.addEventListener(
      "pointerdown",
      () => {
        sound.play();
        button.style.display = "none";
      },
      false
    );
  });

  const analyser = new AudioAnalyser(sound, 32);

  let state = {
    mouse: new Vector3(),
    currMouse: new Vector3(),
    pointerDown: 0.0,
    currPointerDown: 0.0,
    audio: 0.0,
    currAudio: 0.0,
    time: 0.0,
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      state.currMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      state.currMouse.y = (event.clientY / window.innerWidth) * 2 - 1;
    },
    false
  );

  window.addEventListener(
    "pointerdown",
    (event) => (state.currPointerDown = 1.0),
    false
  );
  window.addEventListener(
    "pointerup",
    (event) => (state.currPointerDown = 1.0),
    false
  );

  let geometry = new SphereGeometry(2, 45, 45);

  let mesh = createSculptureWithGeometry(geometry, spCode(), () => ({
    time: state.time,
    pointerDown: state.pointerDown,
    audio: state.audio,
    mouse: state.mouse,
    _scale: 0.5,
  }));
  scene.add(mesh);

  // Add Controlls
  let controls = new OrbitControls(camera, renderer.domElement, {
    enableDamping: true,
    dampingFactor: 0.25,
    zoomSpeed: 0.5,
    rotateSpeed: 0.5,
  });

  window.addEventListener("resize", onWindowResize);

  let render = () => {
    audio.autoplay(false);
    requestAnimationFrame(render);
    state.time += clock.getDelta();
    controls.update();
    if (analyser) {
      state.currAudio +=
        Math.pow((analyser.getFrequencyData()[2] / 255) * 0.81, 8) +
        clock.getDelta() * 0.5;
      state.audio = 0.2 * state.currAudio + 0.8 * state.audio;
    }
    state.pointerDown = 0.1 * state.currPointerDown + 0.9 * state.pointerDown;
    state.mouse.lerp(state.currMouse, 0.05);
    renderer.render(scene, camera);
  };

  render();
}
