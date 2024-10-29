const mongoose = require("mongoose");

// Define the Poll Schema with embedded options
const pollSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: [
      {
        text: {
          type: String,
          required: true,
        },
        votes: {
          type: Number,
          default: 0, // Default number of votes for this option
        },
      },
    ], // Array of options for the poll
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Create the Poll model
const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
