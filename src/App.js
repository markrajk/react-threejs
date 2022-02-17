import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import Orbit from "./components/Orbit";
import Background from "./components/Background";
import Floor from "./components/Floor";
import Lights from "./components/Lights";
import ColorPicker from "./components/ColorPicker";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <Effects />
        <CameraControls />
        <Lights />
        <axesHelper args={[5]} />
        <Orbit />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
