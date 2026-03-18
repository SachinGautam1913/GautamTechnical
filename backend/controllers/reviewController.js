const Review = require("../models/Review");

const createReview = async (req, res) => {
  try {
    const { name, role, rating, feedback } = req.body;

    if (!name || !role || !rating || !feedback) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, role, rating, feedback",
      });
    }

    const newReview = new Review({
      name: name.trim(),
      role: role.trim(),
      rating: Number(rating),
      feedback: feedback.trim(),
    });

    const savedReview = await newReview.save();

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: savedReview,
    });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({
      success: false,
      message: "Error creating review",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching reviews",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

module.exports = { createReview, getReviews };
