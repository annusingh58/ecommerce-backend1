import mongoose from "mongoose";
import { Schema } from "mongoose";


const User = new Schema({
    name:String,
    email:String,
    password:String,
    emailotp: String,
    numberotp:String,
    isEmailVerified: Boolean,
    number:Number,
    // loginotp:String,
    loginemailotp:String,
    loginnumberotp:String
   

});


export default mongoose.model("Users",User)
