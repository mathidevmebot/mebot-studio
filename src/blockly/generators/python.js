import { pythonGenerator } from "blockly/python";

pythonGenerator.forBlock['move_forward'] = function (block) {
  const dist = block.getFieldValue("DIST");
  return `mebot.move_forward(${dist})\n`;
};

pythonGenerator.forBlock['turn_left'] = function (block) {
  const deg = block.getFieldValue("DEG");
  return `mebot.turn_left(${deg})\n`;
};

pythonGenerator.forBlock['turn_right'] = function (block) {
  const deg = block.getFieldValue("DEG");
  return `mebot.turn_right(${deg})\n`;
};

export default pythonGenerator;