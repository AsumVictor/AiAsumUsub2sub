const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
   avatar: {
    type: String,
    required: false,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W9ZUvURZbLgvMrM91aMZUOoeKDo34EOu4w&usqp=CAU",
   },
   firstName: {
    type: String,
    required: true,
   },
   lastName: {
    type: String,
    required: true,
   },
   email: {
    type: String,
    required: true,
   },
   password: {
    type: String,
    required: true,
   },
   country: {
    type: String,
    required: true,
   },
   phone: {
    type: String,
    required: false,
   },
   youtubeURL: {
    type: String,
    required: false,
   },
   youtubeName: {
    type: String,
    required: false,
   },
},{
    timestamps: true
})

module.exports = mongoose.model("User",userSchema)