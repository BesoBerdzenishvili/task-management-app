const Board = require("../models/boardModel");
const mongoose = require("mongoose");

// get all boards
const getBoards = async (req, res) => {
  const boards = await Board.find({}).sort({ createdAt: -1 });

  res.status(200).json(boards);
};

// get a single board
const getBoard = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such board" });
  }

  const board = await Board.findById(id);

  if (!board) {
    return res.status(404).json({ error: "No such board" });
  }

  res.status(200).json(board);
};

// create a new board
const createBoard = async (req, res) => {
  const { title, description, status, subtasks, boardName } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!status) {
    emptyFields.push("status");
  }
  if (!subtasks || subtasks.length === 0) {
    emptyFields.push("subtasks");
  }
  if (!boardName) {
    emptyFields.push("boardName");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const board = await Board.create({
      title,
      description,
      status,
      subtasks,
      boardName,
    });
    res.status(200).json(board);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a board
const deleteBoard = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such board" });
  }

  const board = await Board.findOneAndDelete({ _id: id });

  if (!board) {
    return res.status(400).json({ error: "No such board" });
  }

  res.status(200).json(board);
};

// update a board
const updateBoard = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such board" });
  }

  const board = await Board.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!board) {
    return res.status(400).json({ error: "No such board" });
  }

  res.status(200).json(board);
};

module.exports = {
  getBoards,
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
};
