const express = require("express");
const {
  getUserLinks,
  addNewLink,
  getAllLink,
} = require("../controllers/linkController");

const router = express.Router();

router.get("/", getAllLink);

router.post("/", addNewLink);

router.patch("/", (req, res) => {
  res.json({ message: "update a link" });
});

router.delete("/", (req, res) => {
  res.json({ message: "Delete a link" });
});
router.get("/user/:userId", getUserLinks);

module.exports = router;
