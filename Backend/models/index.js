const mongoose = require("mongoose");
require("dotenv").config(); // Loads .env file for local development

// Use MONGO_URI from environment variables
const uri = process.env.MONGO_URI;

function main() {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

module.exports = { main };
