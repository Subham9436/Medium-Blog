import { Canvas } from "@react-three/fiber";
import BaymaxModel from "./Baymax";
import { OrbitControls } from "@react-three/drei";

export function Baymax() {
  return (
    <Canvas>
     <ambientLight intensity={0.3} color="white" />
     <pointLight 
    position={[0, 0, 0]}   // directly below the model
    intensity={2} 
    color="white"
    distance={10} 
    decay={2} 
  />
  <directionalLight 
    position={[0, 2, 2]} 
    intensity={0.8} 
    color="white" 
  />
      {/* <mesh> */}
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color="orange" /> */}
      {/* </mesh> */}
      <OrbitControls />
      <BaymaxModel></BaymaxModel>
    </Canvas>
  );
}
