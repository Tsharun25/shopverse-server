const express = require("express");

const {
  getProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
} = require("../controllers/productController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

router.post(
  "/",
  protect,
  adminOnly,
  createProduct
);

module.exports = router;