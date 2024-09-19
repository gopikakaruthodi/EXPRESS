import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    class:{type:String}
})

//  create a collection of a particular database of MongoDB

export default mongoose.model.user||mongoose.user("user",userSchema)