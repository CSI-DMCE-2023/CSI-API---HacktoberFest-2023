const Users = require("../data/Users.json");

const getAllUsers = async (req, res) => {
  res.send(Users);
};

const searchUsers = async (req, res) => {
  const { zipcode, username } = req.query;

  let filteredUsers = Users;

  if (zipcode) {
    filteredUsers = filteredUsers.filter(
      (user) => user.address.zipcode === zipcode
    );
  }

  res.json(filteredUsers);
};

module.exports = { getAllUsers, searchUsers };
