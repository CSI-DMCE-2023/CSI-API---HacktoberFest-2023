const express = require("express");
const router = express.Router();
const Posts = require("../posts.json");

router.get('/tag/:tag',(req, res) => {
    const { tag } = req.params;
    // Filter posts that contain the specified tag
    const filteredPosts = Posts.posts.filter(post => post.tags.includes(tag));
    console.log(filteredPosts);
    res.json({ posts: filteredPosts });
  });

  
  
module.exports = router;
