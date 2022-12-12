import express from "express";
import mongoose from "mongoose";
import albumsController from "./albums/album-controller.js";
import cors from "cors";
import session from "cookie-session";
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

const DB_CONNECTION_STRING =
  "mongodb+srv://hpadilla6201:Cristiano7!!@cluster0.26fhyow.mongodb.net/tuiter?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION_STRING, options);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
