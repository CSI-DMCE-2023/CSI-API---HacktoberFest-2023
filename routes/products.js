const express = require("express");
const router = express.Router();
const Products = require("../Products.json");
const Posts = require("../Posts.json");

router.get("/", (req, res) => {
  res.send(Products);
});
router.get("/category", async (req, res) => {
  const categories = Products.map((product) => product.category);
  const allCategories = [...new Set(categories)];
  res.send(allCategories);
});

router.get("/categories/:category", (req, res) => {
  const category = req.params.category;
  let result = [];
  Products.map((a) => {
    if (a.category === category) return result.push(a);
  });
  if (result.length !== 0) {
    res.send(result);
  } else {
    res.status(404).send("Category Not Found");
  }
});

router.get("/search", (req, res) => {
  const title = req.query.title;
  let result = Products.filter((product) => {
    return product.title.toLowerCase().includes(title.toLowerCase());
  });
  if (result.length !== 0) {
    res.send(result);
  } else {
    res.status(404).send("Product Not Found");
  }
});

router.get("/search/:userId", (req, res) => {
  const userId  = parseInt(req.params.userId);
  let results = [];
  Posts.posts.map((post) => {
    if(post.userId === userId)results.push(post);
  });
  if (results.length !== 0) {
    res.send(results);
  } else {
    res.status(404).send("No Product found");
  }
  
})

module.exports = router;
