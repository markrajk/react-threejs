import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

const Bulb = (props) => {
  const ref = useRef();
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights) scene.lights.push(ref);
    else scene.lights = [ref];
  }, []);
  return (
    <mesh {...props} ref={ref}>
      <sphereBufferGeometry args={[0.2]} />
      <meshPhongMaterial emissive="yellow" />
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
    </mesh>
  );
};

export default Bulb;
