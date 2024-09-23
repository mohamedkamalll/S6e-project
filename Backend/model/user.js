const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
     id:{
          type:Number,
          required:true,
          unique:true
     },
     username:{
          type:String,
          required:true,
          unique:true
     },
     email:{
          type:String,
          required:true,
          unique:true
     },
     password:{
          type:String,
          required:true,
     },
     role:{
          type:String,
          enum:["Admin","Student","Teacher"]
     }
})

const User = mongoose.model("User",userSchema)
module.exports = User;