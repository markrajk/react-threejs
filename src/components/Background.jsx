import React, { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Background = () => {
  const url = process.env.PUBLIC_URL + "/autoshop.jpg";
  const tex = useTexture(url);

  const { gl } = useThree();

  const formatted = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        tex.image.height
      ).fromEquirectangularTexture(gl, tex),
    []
  );

  return <primitive attach="background" object={formatted.texture} />;
};

export default Background;
