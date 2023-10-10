const express = require("express");
const router = express.Router();
const Users = require("../Users.json");

router.get("/usrs", (req, res) => {
  res.json(Users);
});

router.get("/users/search", (req, res) => {
  const { zipcode } = req.query;
  if (!zipcode) {
    return res.status(400).json({ error: "Zip code is required." });
  }
  // Search for users with matching zip code
  const filteredUsers = Users.filter(
    (user) => user.address.zipcode === zipcode
  );
  if (filteredUsers.length === 0) {
    return res
      .status(404)
      .json({ error: "No users found with that zip code." });
  }
  res.json(filteredUsers);
});

module.exports = router;
