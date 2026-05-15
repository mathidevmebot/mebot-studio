import * as Blockly from "blockly";

Blockly.JavaScript["motion_move_steps"] = function (block) {
  const steps = Blockly.JavaScript.valueToCode(
    block,
    "STEPS",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.x += Math.cos(__sprite.direction) * ${steps};
__sprite.y += Math.sin(__sprite.direction) * ${steps};
`;
};

Blockly.JavaScript["motion_turn_right"] = function (block) {
  const deg = Blockly.JavaScript.valueToCode(
    block,
    "DEG",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.direction += (${deg} * Math.PI / 180);\n`;
};

Blockly.JavaScript["motion_turn_left"] = function (block) {
  const deg = Blockly.JavaScript.valueToCode(
    block,
    "DEG",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.direction -= (${deg} * Math.PI / 180);\n`;
};

Blockly.JavaScript["motion_goto_xy"] = function (block) {
  const x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.x = ${x}; __sprite.y = ${y};\n`;
};

Blockly.JavaScript["motion_change_x"] = function (block) {
  const dx = Blockly.JavaScript.valueToCode(
    block,
    "DX",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.x += ${dx};\n`;
};

Blockly.JavaScript["motion_change_y"] = function (block) {
  const dy = Blockly.JavaScript.valueToCode(
    block,
    "DY",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.y += ${dy};\n`;
};
