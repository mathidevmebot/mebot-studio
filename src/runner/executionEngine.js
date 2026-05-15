import variableStore from "../variables/VariableStore";

export function createExecutionEnv(spriteId) {
  return {
    __wait: (seconds) =>
      new Promise((resolve) => setTimeout(resolve, seconds * 1000)),

    __setVar: (name, value) => {
      variableStore.setSprite(spriteId, name, value);
    },

    __getVar: (name) => {
      return variableStore.getSprite(spriteId, name);
    },
  };
}
