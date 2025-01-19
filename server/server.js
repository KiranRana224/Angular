// server.js

const express = require("express");
const userRoutes = require("./router/login.routes");
const sequelize = require("./config/db"); // Import sequelize for initial connection check
const app = express();
const dotenv = require("dotenv");
var cors = require("cors");

app.use(cors()); // Use this after the variable declaration
dotenv.config(); // Load environment variables before using them

// Trust the first proxy (adjust as needed)
app.set("trust proxy", true);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
