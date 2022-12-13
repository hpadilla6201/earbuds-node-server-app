import * as dao from "./reviews-dao.js";

const ReviewsController = (app) => {
  const createReview = async (req, res) => {
    const review = req.body;
    const currentUser = req.session["currentUser"];
    review.author = currentUser._id;
    const actualReview = await dao.createReview(review);
    res.json(actualReview);
  };
  const findReviewsByAlbum = async (req, res) => {
    const lastFmID = req.params.lastFmID;
    const reviews = await dao.findReviewsByAlbum(lastFmID);
    res.json(reviews);
  };
  const findReviewsByAuthor = async (req, res) => {
    const author = req.params.author;
    const reviews = await dao.findReviewsByAuthor(author);
    res.json(reviews);
  };

  const deleteReview = async (req, res) => {
    const reviewIdToDelete = req.params._id;
    const status = await dao.deleteReview(reviewIdToDelete);
    res.sendStatus(200);
  };

  app.post("/api/reviews", createReview);
  app.get("/api/album/:lastFmID/reviews", findReviewsByAlbum);
  app.get("/api/users/:author/reviews", findReviewsByAuthor);
  app.delete("/api/reviews/:rid", deleteReview);
};
export default ReviewsController;
