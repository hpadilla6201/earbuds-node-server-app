import mongoose from "mongoose";

const alubmsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    likes: { type: Number, default: 0 },
    liked: { type: Boolean, default: false },
    dislikes: Number,
  },
  { collection: "albums" }
);

export default alubmsSchema;
