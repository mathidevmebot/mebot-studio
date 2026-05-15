import { javascriptGenerator } from "blockly/javascript";

export default javascriptGenerator;

javascriptGenerator.forBlock['move_forward'] = function (block) {
  const dist = block.getFieldValue("DIST");
  return `mebot.moveForward(${dist});\n`;
};

javascriptGenerator.forBlock['turn_left'] = function (block) {
  const deg = block.getFieldValue("DEG");
  return `mebot.turnLeft(${deg});\n`;
};

javascriptGenerator.forBlock['turn_right'] = function (block) {
    const deg = block.getFieldValue("DEG");
  return `mebot.turnRight(${deg});\n`;
};

