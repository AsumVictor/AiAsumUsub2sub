const express = require("express");
const {
  userDashboardLinks,
  getUserSubscription,
  addNewSubscription,
  getAllSubscription,
} = require("../controllers/subscriptionController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
 router.use(requireAuth)
router.get("/", getAllSubscription);

router.post("/", addNewSubscription);


router.get("/sub", userDashboardLinks);

router.get("/:id", (req, res) => {
  res.json({ message: "Get a specific subscription" });
});
router.get("/user/:userId", getUserSubscription);

module.exports = router;
