import * as Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "move_forward",
    "message0": "move forward %1 cm",
    "args0": [
      { "type": "field_number", "name": "DIST", "value": 10 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },
  {
    "type": "turn_left",
    "message0": "turn left %1 degrees",
    "args0": [
      { "type": "field_number", "name": "DEG", "value": 90 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 200
  },
  {
    "type": "turn_right",
    "message0": "turn right %1 degrees",
    "args0": [
      { "type": "field_number", "name": "DEG", "value": 90 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 200
  }
]);
