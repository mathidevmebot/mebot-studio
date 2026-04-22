import * as Blockly from "blockly";

// Create a standalone generator instead of modifying Blockly
const MebotGenerator = new Blockly.Generator("Mebot");

// Movement: move forward
MebotGenerator["move_forward"] = function (block) {
  const dist = block.getFieldValue("DIST");
  return `{"cmd":"move_forward","value":${dist}}\n`;
};

// Movement: turn left
MebotGenerator["turn_left"] = function (block) {
  const deg = block.getFieldValue("DEG");
  return `{"cmd":"turn_left","value":${deg}}\n`;
};

// Movement: turn right
MebotGenerator["turn_right"] = function (block) {
  const deg = block.getFieldValue("DEG");
  return `{"cmd":"turn_right","value":${deg}}\n`;
};

export default MebotGenerator;
