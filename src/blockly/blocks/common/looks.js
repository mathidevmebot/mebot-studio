import * as Blockly from "blockly";

Blockly.Blocks["looks_show"] = {
  init: function () {
    this.appendDummyInput().appendField("show");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  },
};

Blockly.Blocks["looks_hide"] = {
  init: function () {
    this.appendDummyInput().appendField("hide");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  },
};

Blockly.Blocks["looks_set_size"] = {
  init: function () {
    this.appendValueInput("SIZE")
      .setCheck("Number")
      .appendField("set size to");
    this.appendDummyInput().appendField("%");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  },
};

Blockly.Blocks["looks_change_size"] = {
  init: function () {
    this.appendValueInput("DELTA")
      .setCheck("Number")
      .appendField("change size by");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  },
};

Blockly.Blocks["looks_switch_costume"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("switch costume to")
      .appendField(new Blockly.FieldTextInput("costume.png"), "COSTUME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  },
};
