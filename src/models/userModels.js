import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      min: 3,
      max: 100,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      min: 3,
      max: 100,
      required: [true, "Last name is required"],
    },
    location: {
      type: String,
      default: " ",
    },
    occupation: {
      type: String,
      default: " ",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilePic: {
      type: String,
      default: " ",
    },
    profileViews: {
      type: Number,
      default: 0,
      min: 0,
    },
    profileImpressions: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);
const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
