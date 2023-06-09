const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
   avatar: {
    type: String,
    required: false,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W9ZUvURZbLgvMrM91aMZUOoeKDo34EOu4w&usqp=CAU",
   },
   email: {
    type: String,
    required: true,
   },
   password: {
    type: String,
    required: true,
   },
   
},{
    timestamps: true
})

module.exports = mongoose.model("User",userSchema)