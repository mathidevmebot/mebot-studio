class VariableStore {
  constructor() {
    this.global = {};
    this.spriteVars = {};
  }

  ensureSprite(id) {
    if (!this.spriteVars[id]) this.spriteVars[id] = {};
  }

  setGlobal(name, value) {
    this.global[name] = value;
  }

  getGlobal(name) {
    return this.global[name];
  }

  setSprite(id, name, value) {
    this.ensureSprite(id);
    this.spriteVars[id][name] = value;
  }

  getSprite(id, name) {
    this.ensureSprite(id);
    return this.spriteVars[id][name];
  }
}

const variableStore = new VariableStore();
export default variableStore;
