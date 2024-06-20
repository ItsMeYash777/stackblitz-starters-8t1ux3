import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:[{
        room_no:{
            type:String,
            required:true
        },
        Street:{
            type:String,
            require:true,
        },
        roadName:{
            type:String,
            required:true,
        },
        landmark:{
            type:String,
            required:true,

        },
        pincode:{
            type:Number,
            required:true,

        }
    }]
}, {timestamps:true})

export const User = mongoose.model("User", UserSchema)