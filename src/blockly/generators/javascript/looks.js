import * as Blockly from "blockly";

Blockly.JavaScript["looks_show"] = function () {
  return `__sprite.visible = true;\n`;
};

Blockly.JavaScript["looks_hide"] = function () {
  return `__sprite.visible = false;\n`;
};

Blockly.JavaScript["looks_set_size"] = function (block) {
  const size = Blockly.JavaScript.valueToCode(
    block,
    "SIZE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.size = ${size};\n`;
};

Blockly.JavaScript["looks_change_size"] = function (block) {
  const delta = Blockly.JavaScript.valueToCode(
    block,
    "DELTA",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__sprite.size += ${delta};\n`;
};

Blockly.JavaScript["looks_switch_costume"] = function (block) {
  const costume = block.getFieldValue("COSTUME");
  return `__sprite.costume = "${costume}";\n`;
};
