import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        sr_no:Number,
        name:String,
        completed: {
        type: Boolean,
        default: false
    }
    }
)

const userModel = mongoose.model("tasks", UserSchema);
export default userModel;