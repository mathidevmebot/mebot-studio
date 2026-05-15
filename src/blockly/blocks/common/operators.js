import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([

  // Arithmetic
  {
    "type": "operator_add",
    "message0": "%1 + %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Number",
    "colour": 90
  },
  {
    "type": "operator_subtract",
    "message0": "%1 - %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Number",
    "colour": 90
  },
  {
    "type": "operator_multiply",
    "message0": "%1 × %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Number",
    "colour": 90
  },
  {
    "type": "operator_divide",
    "message0": "%1 ÷ %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Number",
    "colour": 90
  },

  // Random
  {
    "type": "operator_random",
    "message0": "pick random %1 to %2",
    "args0": [
      { "type": "input_value", "name": "FROM" },
      { "type": "input_value", "name": "TO" }
    ],
    "output": "Number",
    "colour": 90
  },

  // Comparisons
  {
    "type": "operator_lt",
    "message0": "%1 < %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Boolean",
    "colour": 90
  },
  {
    "type": "operator_gt",
    "message0": "%1 > %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Boolean",
    "colour": 90
  },
  {
    "type": "operator_equals",
    "message0": "%1 = %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Boolean",
    "colour": 90
  },

  // Logic
  {
    "type": "operator_and",
    "message0": "%1 and %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Boolean",
    "colour": 90
  },
  {
    "type": "operator_or",
    "message0": "%1 or %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Boolean",
    "colour": 90
  },
  {
    "type": "operator_not",
    "message0": "not %1",
    "args0": [
      { "type": "input_value", "name": "A" }
    ],
    "output": "Boolean",
    "colour": 90
  },

  // String
  {
    "type": "operator_join",
    "message0": "join %1 %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "String",
    "colour": 90
  },
  {
    "type": "operator_letter_of",
    "message0": "letter %1 of %2",
    "args0": [
      { "type": "input_value", "name": "INDEX" },
      { "type": "input_value", "name": "TEXT" }
    ],
    "output": "String",
    "colour": 90
  },
  {
    "type": "operator_length",
    "message0": "length of %1",
    "args0": [
      { "type": "input_value", "name": "TEXT" }
    ],
    "output": "Number",
    "colour": 90
  },
  {
    "type": "operator_contains",
    "message0": "%1 contains %2",
    "args0": [
      { "type": "input_value", "name": "TEXT" },
      { "type": "input_value", "name": "SUB" }
    ],
    "output": "Boolean",
    "colour": 90
  }

]);
