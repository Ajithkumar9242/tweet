import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 4000
import userRoute from "./routes/userRoutes.js"
import authRoute from "./routes/authRoutes.js"
import tweetRoute from "./routes/tweetRoute.js"
const app = express()

mongoose.connect(process.env.MONGO_URL)
.then((suc) =>{
    console.log(`Connected`)
})
.catch((error) =>{
    console.log(error)
})
app.use(express.json())
app.use("/api/users", userRoute )
app.use("/api/auth", authRoute )
app.use("/api/tweet", tweetRoute )


app.listen(PORT, () =>{
    console.log(`Server Started at ${PORT}`)
})