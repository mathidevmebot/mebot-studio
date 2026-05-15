import React from "react";
import "./sprites.css";

export default function SpriteCard({ sprite, isActive, onSelect, onDelete }) {
  return (
    <div
      className={`sprite-card ${isActive ? "active" : ""}`}
      onClick={() => onSelect(sprite.id)}
    >
      <img src={sprite.costume} className="sprite-thumb" />
      <div className="sprite-name">{sprite.name}</div>

      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(sprite.id);
        }}
      >
        ✕
      </button>
    </div>
  );
}
