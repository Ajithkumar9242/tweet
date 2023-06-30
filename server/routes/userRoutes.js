import express from "express"
import { deleteUser, follow, getUser, unFollow, updateUser } from "../controllers/userController.js"

const router = express.Router()

router.get("/find/:id" , getUser)
router.put("/:id" , updateUser)
router.delete("/:id" , deleteUser)
router.delete("/follow/:id" , follow)
router.delete("/unfollow/:id" , unFollow)

export default router