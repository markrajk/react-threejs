import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Model = (props) => {
  const model = useGLTF(`${process.env.PUBLIC_URL}${props.path}`);
  let mixer;

  const modelRef = useRef();

  if (model) {
    // model.scene.children[0].material = new THREE.MeshPhysicalMaterial({
    //   color: "yellow",
    //   transmission: 1,
    //   opacity: 1,
    //   roughness: 0,
    // });
    console.log(model);
    model.scene.children.forEach((object) => {
      switch (object.name) {
        case "Bottle":
          // object.material.depthWrite = false;
          console.log(object);
          // object.material.depthWrite = false;
          object.material.depthWrite = false;
          object.renderOrder = 0;
          // object.material = new THREE.MeshStandardMaterial({
          //   color: "red",
          //   transmission: 1,
          //   opacity: 1,
          //   roughness: 0,
          // });
          break;
        case "Wine-03":
          console.log(object);
          object.material.depthWrite = false;
          object.renderOrder = 1;
          // object.material = new THREE.MeshStandardMaterial({
          //   color: "red",
          //   transmission: 1,
          //   opacity: 1,
          //   roughness: 0,
          // });
          break;
        default:
          object.renderOrder = 3;
          break;
      }
    });
  }

  if (model.animations.length > 0) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((scene, delta) => {
    // model?.rotation?.x += .1;
    modelRef.current.rotation.y += 0.0025;

    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return <primitive ref={modelRef} object={model.scene} scale={props.scale} />;
};

export default Model;
