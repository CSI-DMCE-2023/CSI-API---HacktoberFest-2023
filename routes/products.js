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

router.get("/search", (req, res) => {
  const searchTerm = req.query.title;
  if (!searchTerm) {
    return res.status(400).json({ error: "Title parameter is required." });
  }

  const matchingProducts = Products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  res.json(matchingProducts);
});

module.exports = router;
