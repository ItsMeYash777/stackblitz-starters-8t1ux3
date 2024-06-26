import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password:{
            type: String,
            required:[true, "Password is Required"]
        }


    }, {timestamps:true}
)

export const User = mongoose.model("User", UserSchema)