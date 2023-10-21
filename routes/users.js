const express = require("express");
const router = express.Router();
const { getAllUsers, searchUsers } = require("../controllers/users");

router.get("/", getAllUsers);

router.get("/search", searchUsers);

router.get("/paginate", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const usersOnPage = Users.slice(startIndex, endIndex);

  res.json(usersOnPage);
});

module.exports = router;
