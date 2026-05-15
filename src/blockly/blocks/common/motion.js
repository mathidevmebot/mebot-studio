import * as Blockly from "blockly";

Blockly.Blocks["motion_move_steps"] = {
  init: function () {
    this.appendValueInput("STEPS")
      .setCheck("Number")
      .appendField("move");
    this.appendDummyInput().appendField("steps");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
};

Blockly.Blocks["motion_turn_right"] = {
  init: function () {
    this.appendValueInput("DEG")
      .setCheck("Number")
      .appendField("turn right");
    this.appendDummyInput().appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
};

Blockly.Blocks["motion_turn_left"] = {
  init: function () {
    this.appendValueInput("DEG")
      .setCheck("Number")
      .appendField("turn left");
    this.appendDummyInput().appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
};

Blockly.Blocks["motion_goto_xy"] = {
  init: function () {
    this.appendValueInput("X").setCheck("Number").appendField("go to x:");
    this.appendValueInput("Y").setCheck("Number").appendField("y:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
};

Blockly.Blocks["motion_change_x"] = {
  init: function () {
    this.appendValueInput("DX")
      .setCheck("Number")
      .appendField("change x by");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
};

Blockly.Blocks["motion_change_y"] = {
  init: function () {
    this.appendValueInput("DY")
      .setCheck("Number")
      .appendField("change y by");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
};
