import * as Blockly from "blockly";

Blockly.Blocks["event_when_flag_clicked"] = {
  init: function () {
    this.appendDummyInput().appendField("when green flag clicked");
    this.setNextStatement(true);
    this.setColour(60);
  },
};

Blockly.Blocks["event_when_sprite_clicked"] = {
  init: function () {
    this.appendDummyInput().appendField("when this sprite clicked");
    this.setNextStatement(true);
    this.setColour(60);
  },
};

Blockly.Blocks["event_when_key_pressed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("when key")
      .appendField(
        new Blockly.FieldDropdown([
          ["space", " "],
          ["up arrow", "ArrowUp"],
          ["down arrow", "ArrowDown"],
          ["left arrow", "ArrowLeft"],
          ["right arrow", "ArrowRight"],
        ]),
        "KEY"
      )
      .appendField("pressed");
    this.setNextStatement(true);
    this.setColour(60);
  },
};
