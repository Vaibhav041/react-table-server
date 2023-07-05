import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    id:String,
    name:String,
    image:String,
    category:String,
    label:String,
    price:Number,
    description:String
},
{timestamps:true}
)
export default mongoose.model("foods", foodSchema);