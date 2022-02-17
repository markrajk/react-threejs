import React from "react";
import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  borderRadius: "50%",
  cursor: "pointer",
};

const CameraButtons = () => {
  const sets = {
    1: {
      cameraPos: [9, 2, 4],
      target: [4, 0, 0],
      name: "Capot001_CAR_PAINT_0",
    },
    2: {
      cameraPos: [1, 2, 5],
      target: [-4, 0, 0],
      name: "object005_bod_0",
    },
  };
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
  };

  return (
    <>
      <div
        onClick={(e) => handleClick(2)}
        style={{
          ...style,
          left: "40vw",
        }}
      >
        {"<"}
      </div>
      <div
        onClick={(e) => handleClick(1)}
        style={{
          ...style,
          right: "40vw",
        }}
      >
        {">"}
      </div>
    </>
  );
};

export default CameraButtons;
