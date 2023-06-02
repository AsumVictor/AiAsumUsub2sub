const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscribtionSchema = new Schema({
   user: {
    type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
   },
   youtubeID: {
    type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Link",
   },
},{
    timestamps: true
})

module.exports = mongoose.model("Subscribtion",subscribtionSchema)