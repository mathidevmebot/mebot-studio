import * as Blockly from "blockly";

Blockly.JavaScript["variables_set"] = function (block) {
  const name = block.getFieldValue("VAR");
  const value = Blockly.JavaScript.valueToCode(
    block,
    "VALUE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `__setVar("${name}", ${value});\n`;
};

Blockly.JavaScript["variables_get"] = function (block) {
  const name = block.getFieldValue("VAR");
  return [`__getVar("${name}")`, Blockly.JavaScript.ORDER_ATOMIC];
};
