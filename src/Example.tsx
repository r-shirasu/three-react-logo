import { OrbitControls } from "@react-three/drei";

export const Example = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight
        castShadow={true}
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
