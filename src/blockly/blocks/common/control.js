import * as Blockly from "blockly";

Blockly.Blocks["control_wait"] = {
  init: function () {
    this.appendValueInput("DURATION")
      .setCheck("Number")
      .appendField("wait");
    this.appendDummyInput().appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(45);
  },
};

Blockly.Blocks["control_repeat"] = {
  init: function () {
    this.appendValueInput("TIMES")
      .setCheck("Number")
      .appendField("repeat");
    this.appendStatementInput("DO").appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(45);
  },
};

Blockly.Blocks["control_forever"] = {
  init: function () {
    this.appendStatementInput("DO").appendField("forever");
    this.setPreviousStatement(true);
    this.setColour(45);
  },
};

Blockly.Blocks["control_if"] = {
  init: function () {
    this.appendValueInput("COND")
      .setCheck("Boolean")
      .appendField("if");
    this.appendStatementInput("DO").appendField("then");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(45);
  },
};

Blockly.Blocks["control_if_else"] = {
  init: function () {
    this.appendValueInput("COND")
      .setCheck("Boolean")
      .appendField("if");
    this.appendStatementInput("DO").appendField("then");
    this.appendStatementInput("ELSE").appendField("else");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(45);
  },
};
