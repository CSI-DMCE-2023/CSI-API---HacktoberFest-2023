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

module.exports = router;
