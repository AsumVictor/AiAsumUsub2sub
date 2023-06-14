const UserModel = require("../model/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emailValidator = require("deep-email-validator");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.ACCESS_TOKEN, { expiresIn: "3d" });
};

//get a specific user
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || email.trim() === "" || password.trim() === "") {
    return res.status(400).json({
      message: "All required filled must be completed!",
      isSuccess: false,
    });
  }

  const user = await UserModel.findOne({ email }).lean();

  if (!user) {
    return res
      .status(400)
      .json({ message: "Invalid email or password", isSuccess: false });
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    return res
      .status(400)
      .json({ message: "Invalid email or password", isSuccess: false });
  }

  const token = createToken(user._id);

  return res.status(200).json({ email, token });
};

//add new user
const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || email.trim() === "" || password.trim() === "") {
    return res.status(400).json({
      message: "All required filled must be completed!",
      isSuccess: false,
    });
  }

  const { valid } = await emailValidator.validate(email);
  if (!valid) {
    return res
      .status(400)
      .json({
        message: " Please provide a valid email address",
        isSuccess: false,
      });
  }

  const duplicate = await UserModel.findOne({ email }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "It seems this user aleady exist" });
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  let user = await UserModel.create({
    email,
    password: hashedPassword,
  });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Error occured! try again", isSuccess: false });
  }

  const token = createToken(user._id);
  return res.status(200).json({ email, token });
};

//update a user
//delete a user

module.exports = { login, signup };
