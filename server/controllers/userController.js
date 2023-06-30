import User from "../models/userModel.js"


export const getUser = async (req, res) =>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateUser = async (req, res) =>{
    if(req.params.id === req.user.id){
    try {
        const updatedUser = User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{
            new: true
        })
        res.status(200).json(updateUser)

    } catch (error) {
        res.status(500).json(error)
        
    }
}
}

export const deleteUser = async (req, res) =>{
    if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      

      res.status(200).json("User delete");

    } catch (error) {
        res.status(500).json(error)
        }
     }
}

export const follow = async (req, res) => {
  try {
    //user
    const user = await User.findById(req.params.id);
    //current user
    const currentUser = await User.findById(req.body.id);

    if (!user.followers.includes(req.body.id)) {
      await user.updateOne({
        $push: { followers: req.body.id },
      });

      await currentUser.updateOne({ $push: { following: req.params.id } });
    } else {
      res.status(403).json("you already follow this user");
    }
    res.status(200).json("following the user");
  } catch (error) {
            res.status(500).json(error)

  }
};
export const unFollow = async (req, res) => {
  try {
    //user
    const user = await User.findById(req.params.id);
    //current user
    const currentUser = await User.findById(req.body.id);

    if (currentUser.following.includes(req.params.id)) {
      await user.updateOne({
        $pull: { followers: req.body.id },
      });

      await currentUser.updateOne({ $pull: { following: req.params.id } });
    } else {
      res.status(403).json("you are not following this user");
    }
    res.status(200).json("unfollowing the user");
  } catch (error) {
            res.status(500).json(error)

  }
};