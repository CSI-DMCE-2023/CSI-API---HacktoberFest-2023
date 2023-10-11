const express = require("express");
const router = express.Router();
const Products = require("../Products.json");

router.get("/", (req, res) => {
  res.send(Products);
});
router.get("/category", async (req, res) => {
  const categories = Products.map((product) => product.category);
  const allCategories = [...new Set(categories)];
  res.send(allCategories);
});

module.exports = router;
