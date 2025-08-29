import { Canvas } from "@react-three/fiber";
import BaymaxModel from "./Baymax";
import { OrbitControls } from "@react-three/drei";

export function Baymax() {
  return (
    <Canvas>
      <ambientLight color="white" />

      {/* <mesh> */}
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color="orange" /> */}
      {/* </mesh> */}
      <OrbitControls />
      <BaymaxModel></BaymaxModel>
    </Canvas>
  );
}
