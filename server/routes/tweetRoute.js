import express from "express"
import { createTweet, deleteTweet, getAllTweets, getUserTweets, likeOrDislike } from "../controllers/tweetController.js"

const router = express.Router()

router.post("/" , createTweet)
router.delete("/:id" , deleteTweet)
router.put("/:id/like", likeOrDislike);

router.get("/timeline/:id", getAllTweets);

router.get("/user/all/:id", getUserTweets);

export default router