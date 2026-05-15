import * as Blockly from "blockly";

Blockly.JavaScript["operator_add"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A") || 0} + ${Blockly.JavaScript.valueToCode(block, "B") || 0})`, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript["operator_subtract"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A") || 0} - ${Blockly.JavaScript.valueToCode(block, "B") || 0})`, Blockly.JavaScript.ORDER_SUBTRACTION];
};

Blockly.JavaScript["operator_multiply"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A") || 0} * ${Blockly.JavaScript.valueToCode(block, "B") || 0})`, Blockly.JavaScript.ORDER_MULTIPLICATION];
};

Blockly.JavaScript["operator_divide"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A") || 0} / ${Blockly.JavaScript.valueToCode(block, "B") || 0})`, Blockly.JavaScript.ORDER_DIVISION];
};

Blockly.JavaScript["operator_random"] = (block) => {
  const from = Blockly.JavaScript.valueToCode(block, "FROM") || 0;
  const to = Blockly.JavaScript.valueToCode(block, "TO") || 10;
  return [`(Math.floor(Math.random() * (${to} - ${from} + 1)) + ${from})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript["operator_lt"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A")} < ${Blockly.JavaScript.valueToCode(block, "B")})`, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript["operator_gt"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A")} > ${Blockly.JavaScript.valueToCode(block, "B")})`, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript["operator_equals"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A")} == ${Blockly.JavaScript.valueToCode(block, "B")})`, Blockly.JavaScript.ORDER_EQUALITY];
};

Blockly.JavaScript["operator_and"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A")} && ${Blockly.JavaScript.valueToCode(block, "B")})`, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.JavaScript["operator_or"] = (block) => {
  return [`(${Blockly.JavaScript.valueToCode(block, "A")} || ${Blockly.JavaScript.valueToCode(block, "B")})`, Blockly.JavaScript.ORDER_LOGICAL_OR];
};

Blockly.JavaScript["operator_not"] = (block) => {
  return [`(!${Blockly.JavaScript.valueToCode(block, "A")})`, Blockly.JavaScript.ORDER_LOGICAL_NOT];
};

Blockly.JavaScript["operator_join"] = (block) => {
  return [`(String(${Blockly.JavaScript.valueToCode(block, "A")}) + String(${Blockly.JavaScript.valueToCode(block, "B")}))`, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript["operator_letter_of"] = (block) => {
  return [`(String(${Blockly.JavaScript.valueToCode(block, "TEXT")})[${Blockly.JavaScript.valueToCode(block, "INDEX")} - 1] || "")`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript["operator_length"] = (block) => {
  return [`(String(${Blockly.JavaScript.valueToCode(block, "TEXT")}).length)`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript["operator_contains"] = (block) => {
  return [`(String(${Blockly.JavaScript.valueToCode(block, "TEXT")}).includes(String(${Blockly.JavaScript.valueToCode(block, "SUB")})))`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
