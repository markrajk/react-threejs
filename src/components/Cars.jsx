import { Suspense } from "react";
import Dragable from "./Dragable";
import BoundingBox from "./BoundingBox";
import Model from "./Model";

const Cars = () => {
  return (
    <Suspense>
      {/* opacitySortApproach = THREE.SOME_ENUM */}
      {/* THREE.WebGLRenderer({transparentSortLogic: THREE.CAMERA_PROXIMITY}); */}
      {/* <Dragable transformGroup>
        <BoundingBox
          position={[4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, -0.4, 0.8]}
        >
          <Model
            scale={new Array(3).fill(0.01)}
            path="/tesla_model_3/scene.gltf"
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          position={[-4, 4, 0]}
          dims={[3, 2, 7]}
          offset={[0, -0.8, 0.2]}
        >
          <Model
            scale={new Array(3).fill(0.013)}
            path="/tesla_model_s/scene.gltf"
          />
        </BoundingBox>
      </Dragable> */}
      {/* <group rotation={[0, Math.PI, 0]}>
        <Model path="/mech_drone/scene.gltf" scale={new Array(3).fill(0.01)} />
      </group> */}
      <group position={[4, 0, 0]}>
        <Model path="/flasa_model/flasha-model.gltf" />
      </group>
    </Suspense>
  );
};

export default Cars;
