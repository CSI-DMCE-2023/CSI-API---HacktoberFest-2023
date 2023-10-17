const express = require("express");
const router = express.Router();
const Posts = require("../posts.json");

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

router.get('/tag/:tag', (req, res) => {
  const { tag } = req.params;

  try {
    // Filter posts that contain the specified tag
    const filteredPosts = Posts.posts.filter(post => post.tags.includes(tag));

    if (filteredPosts.length === 0) {
      // No posts with the specified tag found, return a 404 response
      res.status(404).json({ error: "No posts with the specified tag found" });
    } else {
      // Posts with the specified tag found, return them
      res.json({ posts: filteredPosts });
    }
  } catch (err) {
    // Handle any unexpected errors
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
