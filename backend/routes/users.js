const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  addNewUser,
} = require("../controllers/userController");

router.get("/", getAllUsers);

router.post("/", addNewUser);

router.patch("/", (req, res) => {
  res.json({ message: "update a user" });
});

router.delete("/", (req, res) => {
  res.json({ message: "delete a user" });
});

router.get("/:id", getUser);

module.exports = router;
