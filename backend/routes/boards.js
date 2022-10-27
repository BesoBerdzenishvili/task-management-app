const express = require("express");
const {
  getBoards,
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
} = require("../controllers/boardController");

const router = express.Router();

// GET all Boards
router.get("/", getBoards);

// GET a single board
router.get("/:id", getBoard);

// POST a new board
router.post("/", createBoard);

// DELETE a board
router.delete("/:id", deleteBoard);

// UPDATE a board
router.patch("/:id", updateBoard);

module.exports = router;
