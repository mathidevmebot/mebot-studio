import spriteManager from "../sprites/spriteManagerInstance";
import { eventBus } from "./eventBus";

export function runCode(code, spriteId) {
  const sprite = spriteManager.sprites.find((s) => s.id === spriteId);
  if (!sprite) return;

  const wrapped = `
    const __sprite = sprite;
    ${code}
  `;

  try {
    new Function("sprite", wrapped)(sprite);
  } catch (err) {
    console.error("Runtime error:", err);
  }
}

export function runEventScripts(code, spriteId) {
  const sprite = spriteManager.sprites.find((s) => s.id === spriteId);
  if (!sprite) return;

  const eventHandlers = {};

  function __registerEvent(eventName, handler) {
    if (!eventHandlers[eventName]) eventHandlers[eventName] = [];
    eventHandlers[eventName].push(handler);
  }

  const wrapped = `
    const __sprite = sprite;
    ${code}
  `;

  new Function("sprite", "__registerEvent", wrapped)(sprite, __registerEvent);

  Object.entries(eventHandlers).forEach(([eventName, handlers]) => {
    handlers.forEach((h) => {
      eventBus.on(eventName, () => h());
    });
  });
}
