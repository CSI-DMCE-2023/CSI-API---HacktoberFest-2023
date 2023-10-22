const express = require("express");
const {
  filterProducts,
  getProductByCategory,
  getAllCategories,
  getAllProducts,
  paginateProducts,
} = require("../controllers/products");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/category", getAllCategories);

router.get("/categories/:category", getProductByCategory);

router.get("/filter", filterProducts);
router.get("/paginate", paginateProducts);

module.exports = router;
