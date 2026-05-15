import React from "react";
import SpriteCard from "./SpriteCard";
import AddSpriteButton from "./AddSpriteButton";
import "./sprites.css";

export default function SpriteList({
  sprites,
  activeSpriteId,
  onSelect,
  onDelete,
  onAdd,
}) {
  return (
    <div className="sprite-list">
      {sprites.map((sprite) => (
        <SpriteCard
          key={sprite.id}
          sprite={sprite}
          isActive={sprite.id === activeSpriteId}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}

      <AddSpriteButton onAdd={onAdd} />
    </div>
  );
}
