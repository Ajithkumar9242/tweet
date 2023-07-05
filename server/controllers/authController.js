import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const signUp = async (req, res) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });

        await newUser.save();

         const { password, ...othersData } = newUser._doc;
        res.status(200).json(othersData)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const signIn = async (req, res) =>{
    try {
         const user = await User.findOne({ username: req.body.username });

    if (!user) return res.json( " 404, User not found");

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return res.status(400).json("Wrong password");

     const { password, ...othersData } = user._doc;

     res.status(200).json({othersData});
    } catch (error) {
        res.json(error)
    }
   
}