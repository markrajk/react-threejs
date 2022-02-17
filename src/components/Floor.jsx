import React from "react";
import { useBox } from "@react-three/cannon";

const Floor = (props) => {
  const [ref, api] = useBox(() => ({
    ...props,
    args: [200, 1, 200],
  }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[200, 1, 200]} />
      <meshPhysicalMaterial transparent opacity={0.2} />
    </mesh>
  );
};

export default Floor;
