import likesModel from "./likes-model.js";

export const userLikesAlbum = async (uid, aid) => {
  return await likesModel.create({ user: uid, album: aid });
};

export const userUnlikesAlbum = async (uid, aid) => {
  return await likesModel.deleteOne({ user: uid, album: aid });
};

export const findAlbumsLikedByUser = async (uid) => {
  return await likesModel
    .find({ user: uid }, { user: false })
    .populate("album", "title")
    .exec();
};
export const findUsersThatLikeMovie = async (mid) => {
  return await likesModel
    .find({ movie: mid }, { movie: false })
    .populate("user", "username")
    .exec();
};
export const findAllLikes = async () => await likesModel.find();
