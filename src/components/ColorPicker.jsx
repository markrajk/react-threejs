import React from "react";
import * as THREE from "three";
import state from "../state";

const ColorPicker = () => {
  const handleClick = (e) => {
    if (!state.activeMesh) return;

    console.log(state.activeMesh, "CP state.activeMesh");
    state.activeMesh.material.color = new THREE.Color(
      e.currentTarget.style.background
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        top: "20px",
        margin: "auto",
        width: "fit-content",
        display: "flex",
      }}
    >
      <div
        onClick={handleClick}
        style={{ width: "50px", height: "50px", background: "blue" }}
      ></div>
      <div
        onClick={handleClick}
        style={{ width: "50px", height: "50px", background: "yellow" }}
      ></div>
      <div
        onClick={handleClick}
        style={{ width: "50px", height: "50px", background: "white" }}
      ></div>
    </div>
  );
};

export default ColorPicker;
