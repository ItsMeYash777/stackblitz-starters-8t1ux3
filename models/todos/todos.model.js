import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({

    content:{
        type:String,
        requires:true
    },
    complete:{
        type:Boolean,
        required:true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodo:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"subtodo"
        }
    ]
}, {timestamps:true})
export const Todo = mongoose.model("Todo", todoSchema)