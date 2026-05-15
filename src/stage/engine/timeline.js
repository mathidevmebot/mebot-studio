export function startTimeline(updateFn) {
  function loop() {
    updateFn();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}
