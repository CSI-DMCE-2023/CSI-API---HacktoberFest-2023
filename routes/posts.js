const express = require("express");
const router = express.Router();
const Posts = require("../posts.json");

router.get("/search/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  let results = [];
  Posts.posts.map((post) => {
    if (post.userId === userId) results.push(post);
  });
  if (results.length !== 0) {
    res.send(results);
  } else {
    res.status(404).send("No Product found");
  }
});

router.get("/tag/:tag", (req, res) => {
  const { tag } = req.params;
  const page = req.query.page || 1;
  const pageSize = 5;

  try {
    const filteredPosts = Posts.posts.filter((post) => post.tags.includes(tag));

    if (filteredPosts.length === 0) {
      res.status(404).json({ error: "No posts with the specified tag found" });
    } else {
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;
      const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

      res.json({
        totalPages: Number((filteredPosts.length / pageSize).toFixed(0)),
        currentPage: Number(page),
        posts: paginatedPosts,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
