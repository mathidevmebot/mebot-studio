import Sprite from "./Sprite";

export default class SpriteManager {
  constructor() {
    this.sprites = [];
    this.activeSpriteId = null;
  }

  addSprite(name, costume) {
    const id = crypto.randomUUID();
    const sprite = new Sprite(id, name, costume);

    this.sprites.push(sprite);

    if (!this.activeSpriteId) {
      this.activeSpriteId = id;
    }

    return sprite;
  }

  deleteSprite(id) {
    this.sprites = this.sprites.filter((s) => s.id !== id);

    if (this.activeSpriteId === id) {
      this.activeSpriteId = this.sprites.length ? this.sprites[0].id : null;
    }
  }

  setActiveSprite(id) {
    this.activeSpriteId = id;
  }

  get activeSprite() {
    return this.sprites.find((s) => s.id === this.activeSpriteId);
  }
}
