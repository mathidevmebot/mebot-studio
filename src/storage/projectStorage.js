export function saveProject(spriteManager, workspaces) {
  const data = {
    sprites: spriteManager.sprites,
    activeSpriteId: spriteManager.activeSpriteId,
    blocks: {},
  };

  Object.entries(workspaces.current).forEach(([id, ws]) => {
    data.blocks[id] = Blockly.serialization.workspaces.save(ws);
  });

  localStorage.setItem("mebot_project", JSON.stringify(data));
}

export function loadProject(spriteManager, workspaces, createWorkspace, switchWorkspace) {
  const raw = localStorage.getItem("mebot_project");
  if (!raw) return;

  const data = JSON.parse(raw);

  spriteManager.sprites = data.sprites;
  spriteManager.activeSpriteId = data.activeSpriteId;

  Object.entries(data.blocks).forEach(([id, blockData]) => {
    createWorkspace(id, "<xml></xml>");
    Blockly.serialization.workspaces.load(blockData, workspaces.current[id]);
  });

  switchWorkspace(data.activeSpriteId);
}
