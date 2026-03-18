const express = require("express");
const { createReview, getReviews } = require("../controllers/reviewController");

const router = express.Router();

// POST /api/reviews
router.post("/", createReview);

// GET /api/reviews
router.get("/", getReviews);

module.exports = router;
