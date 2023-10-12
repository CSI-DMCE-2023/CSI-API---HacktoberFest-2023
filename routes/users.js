const express = require("express");
const router = express.Router();
const Users = require("../Users.json");

router.get("/" , (req,res) => {
    res.send(Users);
})

router.get("/search" , (req,res) => {
    const {username} = req.query;

    if(!username) return res.send(Users);

    const user = Users.filter((user) => user.username === username);
    
    res.send(user);
});


module.exports = router;