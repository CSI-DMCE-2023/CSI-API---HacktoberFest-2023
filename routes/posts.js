const express = require("express");
const router = express.Router();
const Posts = require("../Posts.json");

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