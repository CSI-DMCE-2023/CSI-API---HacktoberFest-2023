const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  searchUsers,
  paginateUsers,
} = require("../controllers/users");

router.get("/", getAllUsers);

router.get("/search", searchUsers);

router.get("/paginate", paginateUsers);

module.exports = router;
