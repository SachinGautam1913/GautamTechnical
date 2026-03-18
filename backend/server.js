const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// ✅ Load env ONLY once (IMPORTANT)
dotenv.config();

const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Debug (remove later)
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Not Loaded ❌");

// ✅ Routes
app.use("/api/messages", messageRoutes);
app.use("/api/reviews", reviewRoutes);

// ✅ Health check
app.get("/api/health", (req, res) => {
  res.json({ status: `Backend running on port ${PORT}` });
});

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// ✅ Start server after DB connect
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ DB Connection Failed:", error);
    process.exit(1);
  }
};

startServer();