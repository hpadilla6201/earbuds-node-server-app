import express from "express";
import mongoose from "mongoose";
import albumsController from "./albums/album-controller.js";
import cors from "cors";
import session from "express-session";
import SessionController from "./session-controller.js";
import UsersController from "./users/users-controller.js";
import LikesController from "./likes/likes-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import FollowsController from "./follows/follows-controller.js";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
};

mongoose.connect("mongodb://localhost:27017/earbuds", options);

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(
  session({
    secret: "colud be anything",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(express.json());

albumsController(app);
SessionController(app);
UsersController(app);
LikesController(app);
ReviewsController(app);
FollowsController(app);

app.listen(4000);
