const express = require("express");
const router = express.Router();
const {
  login,
  signup,
} = require("../controllers/userController");

router.post("/auth", login);

router.post("/register", signup);

router.patch("/", (req, res) => {
  res.json({ message: "update a user" });
});

router.delete("/", (req, res) => {
  res.json({ message: "delete a user" });
});

module.exports = router;
