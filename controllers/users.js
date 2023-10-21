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

  if (username) {
    filteredUsers = filteredUsers.filter((user) => user.username === username);
  }

  res.json(filteredUsers);
};

const paginateUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const usersOnPage = Users.slice(startIndex, endIndex);

  res.json({ pageSize, currentPage: page, usersOnPage });
};

module.exports = { getAllUsers, searchUsers, paginateUsers };
