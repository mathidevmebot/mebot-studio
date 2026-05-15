export function renderStage(ctx, sprites, background) {
  if (!ctx) return;

  // Clear stage
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Draw background
  if (background) {
    ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  // Draw sprites
  sprites.forEach((sprite) => {
    if (!sprite.visible) return;

    const img = new Image();
    img.src = sprite.costume;

    const scaledWidth = 80 * (sprite.size / 100);
    const scaledHeight = 80 * (sprite.size / 100);

    ctx.save();
    ctx.translate(sprite.x + scaledWidth / 2, sprite.y + scaledHeight / 2);
    ctx.rotate(sprite.direction);
    ctx.drawImage(
      img,
      -scaledWidth / 2,
      -scaledHeight / 2,
      scaledWidth,
      scaledHeight
    );
    ctx.restore();
  });
}
