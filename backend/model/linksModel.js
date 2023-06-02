const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
   user: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
   youtubeName: {
    type: String,
   },
   youtubeURL: {
    type: String,
   },
},{
    timestamps: true
})

module.exports = mongoose.model("Link",linkSchema)