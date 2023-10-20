const express = require("express");
const router = express.Router();
const Users = require("../Users.json");

router.get("/", (req, res) => {
  res.send(Users);
});

router.get("/search", (req, res) => {
  const { zipcode, username } = req.query;

  let filteredUsers = Users;

  if (zipcode) {
    filteredUsers = filteredUsers.filter(
      (user) => user.address.zipcode === zipcode
    );
  }

  res.json(filteredUsers);
});

router.get("/paginate", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const usersOnPage = Users.slice(startIndex, endIndex);

  res.json(usersOnPage);
});

module.exports = router;
