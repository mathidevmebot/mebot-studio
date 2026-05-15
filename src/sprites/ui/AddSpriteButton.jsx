import React from "react";
import "./sprites.css";

export default function AddSpriteButton({ onAdd }) {
  return (
    <button className="add-sprite-btn" onClick={onAdd}>
      + Add Sprite
    </button>
  );
}
