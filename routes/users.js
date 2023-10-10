const express = require("express");
const router = express.Router();
const Users = require("../Users.json");

router.get("/users", (req, res) => {
  res.send(Users);
});

module.exports = router;
