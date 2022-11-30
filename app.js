import express from "express";
import mongoose from "mongoose";
import albumsController from "./albums/album-controller.js";
import cors from 'cors'
import session from 'express-session'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/earbuds', options);

const app = express();
app.use(cors())
app.use(session({
    secret: 'colud be anything',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())

albumsController(app);
SessionController(app)

app.listen(4000)

