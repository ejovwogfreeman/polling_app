const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const pollRoutes = require("./routes/polls");
require("dotenv").config();

const app = express();
const PORT = 5000;
const MONGODB_URI =
  "mongodb+srv://ejovwogfreeman007:gb12345@cluster0.biiin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Routes
// app.get("/api", (req, res) => {
//   res.send("Hello Api");
// });
app.get("/api", (req, res) => {
  try {
    res.send("Hello Api");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
