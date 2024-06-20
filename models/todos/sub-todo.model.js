import mongoose from 'mongoose'
const subTodo = new mongoose.Schema({
content:{
    type:String,
    required:true
},
complete:{
    type:Boolean,
    default:false
},
createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
}
})

export const subtodo = mongoose.model("subtodo", subTodo)