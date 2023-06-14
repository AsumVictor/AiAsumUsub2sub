const jwt = require("jsonwebtoken");
const User = require("../model/usersModel");

const requireAuth = async (req, res, next) => {
  const auth = req.headers.authorization || req.headers.Authorization;
  if (!auth) {
    return res.status(401).json({ message: "Unathorized" });
  }

  const token = auth.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unathorized" });
  }
};

module.exports = requireAuth;
