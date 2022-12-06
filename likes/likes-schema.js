import mongoose from "mongoose";

const likesSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    album: { type: mongoose.Schema.Types.ObjectId, ref: "AlbumsModel" },
  },
  { collection: "likes" }
);
export default likesSchema;
