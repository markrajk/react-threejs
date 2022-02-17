import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

const Box = (props) => {
  const [ref, api] = useBox(() => ({
    ...props,
    mass: 1,
  }));

  const texture = useTexture("/weathered_brown_planks_diff_4k.jpg");

  const handlePointerDown = (e) => {
    e.object.active = true;
    if (window.activeMesh) {
      window.activeMesh.active = false;
      scaleDown(window.activeMesh);
    }

    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.1;
    e.object.scale.y = 1.1;
    e.object.scale.z = 1.1;
  };

  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };
  return (
    <mesh
      api={api}
      ref={ref}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

export default Box;
