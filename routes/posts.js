const express = require("express");
const router = express.Router();
const { searchByUserId, getPostsByTag } = require("../controllers/posts");

router.get("/search/:userId", searchByUserId);

router.get("/tag/:tag", getPostsByTag);

module.exports = router;
