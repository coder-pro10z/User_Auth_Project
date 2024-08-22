const express = require("express");
const { getUserProfile } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/profile", protect, getUserProfile);

module.exports = router;
