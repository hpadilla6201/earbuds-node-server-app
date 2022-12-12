import * as dao from "./reviews-dao.js";

const ReviewsController = (app) => {
  const createReview = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    const review = req.body;
    const currentUser = req.session["currentUser"];
    review.author = currentUser._id;
    const actualReview = await dao.createReview(review);
    res.json(actualReview);
  };
  const findReviewsByAlbum = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    const lastFmID = req.params.lastFmID;
    const reviews = await dao.findReviewsByAlbum(lastFmID);
    res.json(reviews);
  };
  const findReviewsByAuthor = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    const author = req.params.author;
    const reviews = await dao.findReviewsByAuthor(author);
    res.json(reviews);
  };
  app.post("/api/reviews", createReview);
  app.get("/api/album/:lastFmID/reviews", findReviewsByAlbum);
  app.get("/api/users/:author/reviews", findReviewsByAuthor);
};
export default ReviewsController;
