const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    subtasks: {
      type: Array,
      required: true,
    },
    boardName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("board", boardSchema);
