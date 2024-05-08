import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    intake: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);