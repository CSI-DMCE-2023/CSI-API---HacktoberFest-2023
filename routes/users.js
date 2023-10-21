const express = require("express");
const router = express.Router();
const { getAllUsers, searchUsers } = require("../controllers/users");

router.get("/", getAllUsers);

router.get("/search", searchUsers);

module.exports = router;
