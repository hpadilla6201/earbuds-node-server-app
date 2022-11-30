import mongoose from "mongoose";
import alubmsSchema from "./album-schema";

const albumsModel = mongoose.model('AlbumsModel', alubmsSchema)

export default albumsModel;