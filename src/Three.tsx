import { Canvas } from "@react-three/fiber";
import { Example } from "./Example";
import { StrictMode } from "react";
import "./styles.css";

export const Three = () => {
  return (
    <StrictMode>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Example />
      </Canvas>
    </StrictMode>
  );
};
