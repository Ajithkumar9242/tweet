import Tweet from "../models/tweetModel.js"
import User from "../models/userModel.js"

export const createTweet = async (req, res) =>{
    const newTweet = new Tweet(req.body)

    try {
        const saveTweet = await newTweet.save()
        res.status(200).json(saveTweet)

    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteTweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (tweet.userId === req.body.id) {
      await tweet.deleteOne();
      res.status(200).json("tweet has been deleted");
    } else {
        res.status(500).json("error")
    }
  } catch (error) {
        res.status(500).json(error)

  }
};

export const likeOrDislike = async (req, res, next) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet.likes.includes(req.body.id)) {
      await tweet.updateOne({ $push: { likes: req.body.id } });
      res.status(200).json("tweet has been liked");
    } else {
      await tweet.updateOne({ $pull: { likes: req.body.id } });
      res.status(200).json("tweet has been disliked");
    }
  } catch (err) {
    res.json(err)
  }
};

export const getAllTweets = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);
    const userTweets = await Tweet.find({ userId: currentUser._id });
    const followersTweets = await Promise.all(
      currentUser.following.map((followerId) => {
        return Tweet.find({ userId: followerId });
      })
    );

    res.status(200).json(userTweets.concat(...followersTweets));
  } catch (err) {
    res.json(err)
  }
};

export const getUserTweets = async (req, res) => {
  try {
    const userTweets = await Tweet.find({ userId: req.params.id }).sort({
      createAt: -1,
    });

    res.status(200).json(userTweets);
  } catch (err) {
    res.json(err)
  }
};