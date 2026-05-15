import React, { useEffect, useRef } from "react";
import { renderStage } from "./engine/renderer";
import { enableSpriteDragging } from "./engine/physics";
import { startTimeline } from "./engine/timeline";
import backgroundImg from "./assets/background.png";
import { eventBus } from "../runner/eventBus";
import spriteManager from "../sprites/spriteManagerInstance";

export default function Stage() {
  const canvasRef = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    background.current = new Image();
    background.current.src = backgroundImg;

    // Enable dragging
    enableSpriteDragging(canvas, spriteManager.sprites, () => {
      renderStage(ctx, spriteManager.sprites, background.current);
    });

    // Sprite click detection
    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spriteManager.sprites.forEach((sprite) => {
        if (
          x >= sprite.x &&
          x <= sprite.x + 80 &&
          y >= sprite.y &&
          y <= sprite.y + 80
        ) {
          eventBus.emit("sprite_clicked", sprite.id);
        }
      });
    });

    // Start timeline
    startTimeline(() => {
      renderStage(ctx, spriteManager.sprites, background.current);
    });
  }, []);

  return (
    <div className="stage-container">
      <canvas
        ref={canvasRef}
        width={480}
        height={360}
        className="stage-canvas"
      />
    </div>
  );
}
