const express = require("express");
const Poll = require("../models/Poll");

const router = express.Router();

// Create a new poll
router.post("/", async (req, res) => {
  const { question, options } = req.body;

  // Validate request data
  if (!question || !Array.isArray(options) || options.length === 0) {
    return res
      .status(400)
      .json({ message: "Question and options are required." });
  }

  // Ensure each option has text
  for (const option of options) {
    if (!option.text) {
      return res.status(400).json({ message: "Each option must have text." });
    }
  }

  try {
    const poll = new Poll({ question, options });
    await poll.save();
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all polls
router.get("/", async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single poll
router.get("/:id", async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ message: "Poll not found" });
    res.json(poll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a poll
router.delete("/:id", async (req, res) => {
  try {
    const poll = await Poll.findByIdAndDelete(req.params.id);
    if (!poll) return res.status(404).json({ message: "Poll not found" });
    res.json({ message: "Poll deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Vote on a poll
router.post("/:id/vote", async (req, res) => {
  const { optionId } = req.body;

  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ message: "Poll not found" });

    const option = poll.options.id(optionId);
    if (!option) return res.status(404).json({ message: "Option not found" });

    option.votes++;
    await poll.save();
    res.json(poll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
