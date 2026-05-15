import React, { useEffect, useState } from "react";
import spriteManager from "../../sprites/spriteManagerInstance";
import SpriteList from "../../sprites/ui/SpriteList";
import { useWorkspace } from "../context/WorkspaceContext";
import cat from "../../sprites/defaultSprites/cat.png";

export default function LeftSidebar() {
  const { switchWorkspace } = useWorkspace();
  const [, forceUpdate] = useState(0);

  // Add default sprite on first load
  useEffect(() => {
    if (spriteManager.sprites.length === 0) {
      const sprite = spriteManager.addSprite("Sprite1", cat);
      switchWorkspace(sprite.id);
      forceUpdate((x) => x + 1);
    }
  }, [switchWorkspace]);

  const handleAdd = () => {
    const sprite = spriteManager.addSprite(
      "Sprite" + (spriteManager.sprites.length + 1),
      cat
    );

    switchWorkspace(sprite.id);
    forceUpdate((x) => x + 1);
  };

  const handleSelect = (id) => {
    spriteManager.setActiveSprite(id);
    switchWorkspace(id);
    forceUpdate((x) => x + 1);
  };

  const handleDelete = (id) => {
    spriteManager.deleteSprite(id);
    // No workspace disposal needed now
    forceUpdate((x) => x + 1);
  };

  return (
    <div className="left-sidebar">
      <h3>Sprites</h3>

      <SpriteList
        sprites={spriteManager.sprites}
        activeSpriteId={spriteManager.activeSpriteId}
        onSelect={handleSelect}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
}
