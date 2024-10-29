const express = require("express");
const User = require("../models/User");

const router = express.Router();

// User login route
router.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Return user details
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User registration route
router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Create a new user
    const newUser = new User({ email, isAdmin: false }); // Default isAdmin to false
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
