import * as Blockly from "blockly";

Blockly.Blocks["variables_set"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set")
      .appendField(new Blockly.FieldTextInput("var"), "VAR")
      .appendField("to");
    this.appendValueInput("VALUE").setCheck(null);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
  },
};

Blockly.Blocks["variables_get"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get")
      .appendField(new Blockly.FieldTextInput("var"), "VAR");
    this.setOutput(true, null);
    this.setColour(330);
  },
};
