import * as Blockly from "blockly";

Blockly.JavaScript["control_wait"] = function (block) {
  const duration = Blockly.JavaScript.valueToCode(
    block,
    "DURATION",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `await __wait(${duration});\n`;
};

Blockly.JavaScript["control_repeat"] = function (block) {
  const times = Blockly.JavaScript.valueToCode(
    block,
    "TIMES",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const body = Blockly.JavaScript.statementToCode(block, "DO");
  return `for (let i = 0; i < ${times}; i++) {\n${body}}\n`;
};

Blockly.JavaScript["control_forever"] = function (block) {
  const body = Blockly.JavaScript.statementToCode(block, "DO");
  return `while (true) {\n${body}}\n`;
};

Blockly.JavaScript["control_if"] = function (block) {
  const cond = Blockly.JavaScript.valueToCode(
    block,
    "COND",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const body = Blockly.JavaScript.statementToCode(block, "DO");
  return `if (${cond}) {\n${body}}\n`;
};

Blockly.JavaScript["control_if_else"] = function (block) {
  const cond = Blockly.JavaScript.valueToCode(
    block,
    "COND",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const body1 = Blockly.JavaScript.statementToCode(block, "DO");
  const body2 = Blockly.JavaScript.statementToCode(block, "ELSE");
  return `if (${cond}) {\n${body1}} else {\n${body2}}\n`;
};
