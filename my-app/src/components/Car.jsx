import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Buick from "/free_buick_riviera_car/scene.gltf?url";

function Car() {
  const gltf = useLoader(GLTFLoader, Buick);
  return <primitive object={gltf.scene} />;
}

export default Car;
