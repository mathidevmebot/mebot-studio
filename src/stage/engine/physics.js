export function enableSpriteDragging(canvas, sprites, onUpdate) {
  let dragging = null;
  let offsetX = 0;
  let offsetY = 0;

  canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sprites.forEach((sprite) => {
      const width = 80 * (sprite.size / 100);
      const height = 80 * (sprite.size / 100);

      if (
        x >= sprite.x &&
        x <= sprite.x + width &&
        y >= sprite.y &&
        y <= sprite.y + height
      ) {
        dragging = sprite;
        offsetX = x - sprite.x;
        offsetY = y - sprite.y;
      }
    });
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    const rect = canvas.getBoundingClientRect();
    dragging.x = e.clientX - rect.left - offsetX;
    dragging.y = e.clientY - rect.top - offsetY;

    onUpdate();
  });

  canvas.addEventListener("mouseup", () => {
    dragging = null;
  });
}
