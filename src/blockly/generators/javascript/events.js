import * as Blockly from "blockly";

Blockly.JavaScript["event_when_flag_clicked"] = function (block) {
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `__registerEvent("green_flag", async () => { ${statements} });\n`;
};

Blockly.JavaScript["event_when_sprite_clicked"] = function (block) {
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `__registerEvent("sprite_clicked", async () => { ${statements} });\n`;
};

Blockly.JavaScript["event_when_key_pressed"] = function (block) {
  const key = block.getFieldValue("KEY");
  const statements = Blockly.JavaScript.statementToCode(block, "DO");
  return `__registerEvent("key_${key}", async () => { ${statements} });\n`;
};
