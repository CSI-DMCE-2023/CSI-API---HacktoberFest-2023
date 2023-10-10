const express = require("express");
const router = express.Router();
const Products = require("../Products.json");

router.get("/", (req, res) => {
  res.send(Products);
});

module.exports = router;
