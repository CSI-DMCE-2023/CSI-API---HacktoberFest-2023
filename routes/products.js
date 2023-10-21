const express = require("express");
const {
  filterProducts,
  getProductByCategory,
  getAllCategories,
  getAllProducts,
} = require("../controllers/products");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/category", getAllCategories);

router.get("/categories/:category", getProductByCategory);

router.get("/", filterProducts);

module.exports = router;