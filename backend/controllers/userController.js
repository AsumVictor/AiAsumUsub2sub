const UserModel = require("../model/usersModel");
const mongoose = require("mongoose");
//Get all users
const getAllUsers = async (req, res) => {
  const users = await UserModel.find()
    .select("-password")
    .lean()
    .sort({ createdAt: -1 });

  res.status(200).json({ data: users, isSuccess: true });
};

//get a specific user
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "The id is not valid", isSuccess: false });
  }
  const user = await UserModel.findById(id).select("-password").lean();

  if (!user) {
    res.status(400).json({ message: "No user found", isSuccess: false });
  }

  res.status(200).json({ data: user, isSuccess: true });
};
//add new user
const addNewUser = async (req, res) => {
  const {
    avatar,
    firstName,
    lastName,
    email,
    country,
    phone,
    youtubeURL,
    youtubeName,
    password,
  } = req.body;

  if (!firstName || !lastName || !email || !country || !password) {
    res
      .status(400)
      .json({
        message: "All required filled must be completed!",
        isSuccess: false,
      });
  }

    const duplicate = await UserModel.findOne({ email }).lean().exec();
   if (duplicate) {
     return res
       .status(409)
       .json({ message: "It seems this user aleady exist" });
   }

  let user = await UserModel.create({
    avatar,
    firstName,
    lastName,
    email,
    country,
    phone,
    youtubeURL,
    youtubeName,
    password,
  });

  if (!user) {
    res
      .status(400)
      .json({ message: "Error occured! try again", isSuccess: false });
  }

  res
    .status(200)
    .json({ message: "User has been added successfuly", isSuccess: true });
};

//update a user
//delete a user

module.exports = { getAllUsers, getUser, addNewUser };
