const UserModel = require("../model/usersModel");
const linkModel = require("../model/linksModel");
const mongoose = require("mongoose");

//getALl Links
const getAllLink = async (req, res) => {
  const links = await linkModel.find().sort({ createdAt: -1 });
  return res.status(200).json({ data: links, isSuccess: true });
};

//add new link
const addNewLink = async (req, res) => {
  const { youtubeURL, youtubeName, user } = req.body;
  if (!youtubeURL || !youtubeName || !user) {
   return res
      .status(400)
      .json({
        message: "All required fills must be completed",
        isSuccess: false,
      });
  }

  if (!mongoose.Types.ObjectId.isValid(user)) {
   return res.status(400).json({ message: "The id is not valid", isSuccess: false });
  }
   const foundUser = await UserModel.findById(user);
   if (!foundUser) {
    return res
       .status(400)
       .json({ message: "The user doesn't exist", isSuccess: false });
   }

   const duplicateLink = await linkModel.findOne({ youtubeURL: youtubeURL });

   if (duplicateLink) {
    return res
       .status(409)
       .json({
         message:
           "It seems this YouTube channel or the YouTube URL has been submitted before ",
         isSuccess: false,
       });
   }

   const link = await linkModel.create({
     youtubeURL,
     youtubeName,
     user,
   });

   if (!link) {
    return res
       .status(400)
       .json({ message: "invalid inputs", isSuccess: false });
   }

   return res.status(200)
     .json({ message: "You have submitted your link", isSuccess: true });
};
//updateLink
//deleteLink
//getUserLinks
const getUserLinks = async (req, res) => {
    const {userId} = req.params;
    if (!userId) {
       return res
          .status(400)
          .json({
            message: "All required fills must be completed",
            isSuccess: false,
          });
      }
      if (!mongoose.Types.ObjectId.isValid(userId)) {
       return res.status(400).json({ message: "The id is not valid", isSuccess: false });
      }
      const foundUser = await UserModel.findById(userId);
      if (!foundUser) {
      return  res
          .status(400)
          .json({ message: "The user doesn't exist", isSuccess: false });
      }
    const links = await linkModel.find({user: userId}).sort({ createdAt: -1 });

    return res.status(200).json({ data: links, isSuccess: true });
  };

//getSubLinkwithUser

module.exports = {
    getUserLinks,
    addNewLink,
    getAllLink
}
