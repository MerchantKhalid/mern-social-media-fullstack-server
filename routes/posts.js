import express from "express";
import {getFeedPosts,getUserPosts,likedPost} from "../controllers/posts.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router()

//READ
router.get("/",verifyToken,getFeedPosts);
router.get("/:userId/posts",verifyToken,getUserPosts);

//UPDATE
router.patch("/:id/like",verifyToken,likedPost);

export default router;