const UserModel = require("../model/usersModel");
const subscriptionModel = require("../model/subscriptionModel");
const mongoose = require("mongoose");
const linksModel = require("../model/linksModel");

const getAllSubscription = async (req, res) => {
  const subscriptions = await subscriptionModel.find().sort({ updatedAt: -1 });
  return res.status(200).json({ data: subscriptions, isSuccess: true });
};

// add subscription
const addNewSubscription = async (req, res) => {
  const { youtubeID, user } = req.body;

  if (!youtubeID || !user) {
    return res.status(400).json({
      message: "All required fills must be completed",
      isSuccess: false,
    });
  }

  const invalidIDs =
    !mongoose.Types.ObjectId.isValid(user) ||
    !mongoose.Types.ObjectId.isValid(youtubeID);

  if (invalidIDs) {
    return res
      .status(400)
      .json({ message: "The id is not valid", isSuccess: false });
  }

  const foundUser = await UserModel.findById(user);
  const link = await linksModel.findById(youtubeID);
  if (!foundUser || !link) {
    return res.status(400).json({
      message: "The user doesn't exist or the youtube link doesn't",
      isSuccess: false,
    });
  }

  const duplicateSub = await subscriptionModel.findOne({
    user: user,
    youtubeID: youtubeID,
  });

  if (duplicateSub) {
    return res.status(409).json({
      message: "It seems this you've already subscription to this channel",
      isSuccess: false,
    });
  }

  const subscription = await subscriptionModel.create({
    youtubeID,
    user,
  });

  if (!subscription) {
    return res
      .status(400)
      .json({ message: "Invalid inputs", isSuccess: false });
  }

  return res
    .status(200)
    .json({ message: "You have subscribe to this channel", isSuccess: true });
};

// get subscription by user
const getUserSubscription = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      message: "All required fills must be completed",
      isSuccess: false,
    });
  }

  const invalidIDs = !mongoose.Types.ObjectId.isValid(userId);

  if (invalidIDs) {
    return res
      .status(400)
      .json({ message: "The id is not valid", isSuccess: false });
  }

  const foundUser = await UserModel.findById(userId);
  if (!foundUser) {
    res
      .status(400)
      .json({ message: "The user doesn't exist ", isSuccess: false });
  }

  const userSubscriptions = await subscriptionModel.find({ user: userId });
  if (!userSubscriptions) {
    return res
      .status(400)
      .json({ message: "Invalid user inputs", isSuccess: false });
  }

  return res.status(200).json({ data: userSubscriptions, isSuccess: true });
};

// Get subscription to dashboard

const userDashboardLinks = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      message: "All required fills must be completed",
      isSuccess: false,
    });
  }

  const invalidIDs = !mongoose.Types.ObjectId.isValid(userId);

  if (invalidIDs) {
    return res
      .status(400)
      .json({ message: "The id is not valid", isSuccess: false });
  }

  const foundUser = await UserModel.findById(userId);
  if (!foundUser) {
    res
      .status(400)
      .json({ message: "The user doesn't exist ", isSuccess: false });
  }

  //get all submitted links @
  // get all subscription links by user @
  // let an linkArray = subscription by user linkId @
  // loop through all submitted links if linkArray includes a submitted link
  // add isSubscriber: true else isSubscriber: false

  const allSubmittedLinks = await linksModel.find();
  const linksSubscribedByUser = await subscriptionModel.find({user: userId});
  const subscribedLinksIds = linksSubscribedByUser.map(
    (link) => link.youtubeID.toString()
  );
  const totalLinks = allSubmittedLinks.length;
  const TotalLinksSubscribeByUser = linksSubscribedByUser.length;

   const linksWithSubscriptionProperty = await Promise.all(
     allSubmittedLinks.map(async (submittedLink) => {

       let isSubscriber;
       let userSubscribedToTheLink = subscribedLinksIds.includes(submittedLink._id.toString());
       if (userSubscribedToTheLink) {
         isSubscriber = true;
       } else {
         isSubscriber = false;
       }



       return {
         id: submittedLink._id,
         user: submittedLink.user,
         youtubeName: submittedLink.youtubeName,
         youtubeURL: submittedLink.youtubeURL,
         isSubscriber: isSubscriber,
         
       };
     })
   );

 return res
    .status(200)
    .json({
      data: {
        links: linksWithSubscriptionProperty,
        totalLinks,
         TotalLinksSubscribeByUser,
      },
      isSuccess: true,
    });
};

module.exports = {
  userDashboardLinks,
  getUserSubscription,
  addNewSubscription,
  getAllSubscription,
};
