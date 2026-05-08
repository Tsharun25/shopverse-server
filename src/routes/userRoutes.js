const express = require("express");

const {
  getMe,
  adminDashboard,
} = require("../controllers/userController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/me", protect, getMe);

router.get(
  "/admin",
  protect,
  adminOnly,
  adminDashboard
);

module.exports = router;