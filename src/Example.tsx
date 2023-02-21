import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import { useControls } from "leva";

export const Example = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF("../react-logo.gltf");

  const { visible} = useControls({
      visible: true,


  });

  return (
    <>
      <OrbitControls makeDefault />
      <group ref={group} dispose={null}  {...props}  visible={visible} roughtness={5}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[0, 1.31, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.27}
        >
          <mesh
            geometry={nodes.Torus001.geometry}
            material={nodes.Torus001.material}
            position={[0.34, -0.08, 0.02]}
            rotation={[-0.16, 0, -Math.PI / 2]}
            scale={[3.75, 1.47, 3]}
          />
          <mesh
            geometry={nodes.Torus002.geometry}
            material={nodes.Torus002.material}
            position={[-0.52, -0.1, 0.16]}
            rotation={[-1.18, 0, -Math.PI / 2]}
            scale={[3.75, 1.47, 3]}
          />
          <mesh
            geometry={nodes.Torus003.geometry}
            material={nodes.Torus003.material}
            position={[-0.04, -0.11, 0]}
            rotation={[0.89, 0, -Math.PI / 2]}
            scale={[3.75, 1.47, 3]}
          />
        </mesh>
      </group>

      <directionalLight
        castShadow={true}
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />

    </>
  );
};

useGLTF.preload("../react-logo.gltf");
