import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {
  const userLikesAlbum = async (req, res) => {
    const uid = req.params.uid;
    const aid = req.params.aid;

    const newLike = await likesDao.userLikesAlbum(uid, aid);
    res.json(newLike);
  };

  const userUnlikesAlbum = async (req, res) => {
    const uid = req.params.uid;
    const aid = req.params.aid;
    const status = await likesDao.userUnlikesAlbum(uid, aid);
    res.send(status);
  };

  const findAllLikes = async (req, res) => {
    const likes = await likesDao.findAllLikes();
    res.json(likes);
  };
  const findAlbumsLikedByUser = async (req, res) => {
    const uid = req.params.uid;
    const albums = await likesDao.findAlbumsLikedByUser(uid);
    res.json(albums);
  };
  const findUsersWhoLikedAlbums = async (req, res) => {
    const aid = req.params.aid;
    const users = await likesDao.findUsersWhoLikedAlbums(aid);
    res.json(users);
  };

  app.post("/users/:uid/likes/:aid", userLikesAlbum);
  app.delete("/users/:uid/unlikes/:aid", userUnlikesAlbum);
  app.get("/likes", findAllLikes);
  app.get("/users/:uid/likes", findAlbumsLikedByUser);
  app.get("/albums/:aid/likes", findUsersWhoLikedAlbums);
};

export default LikesController;
